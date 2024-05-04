const http = require("http");
const SocketIO = require("socket.io");
const express = require("express");
const ColorHash = require("color-hash").default;
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const bcrypt = require("bcrypt");

/* 
로그인 관련 로직은 삭제하고 클라이언트는 소켓 id로 식별
내용은 전부 영어로 변환처리
*/

dotenv.config();
const port = 3000;
const app = express();
const httpServer = http.createServer(app);
const io = SocketIO(httpServer); //http and websocket share same port #

/*port setting*/
app.set("port", process.env.PORT || port);

/*multer settings for image upload*/
try {
  fs.readdirSync("uploads");
} catch (error) {
  console.error("uploads folder has been created");
  fs.mkdirSync("uploads"); //make uploads directory if not exists
}

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads/"); //store in uploads folder
  },
  filename(req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname)); //to avoid duplicate file name or it'll overwrite
  },
});

const imgFilter = (req, file, callback) => {
  //filtering via regular expressions; only jpg, jpeg, png, JPG, JPEG, PNG ext allowed to upload
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
    return callback(
      new Error("only jpg, jpeg, png formats are allowed"),
      false
    );
  }
  callback(null, true);
};

const limit = { fileSize: 3 * 1024 * 1024 }; //maximum file size = 3MB (3 * 2^20)

const upload = multer({
  storage: storage,
  fileFilter: imgFilter,
  limits: limit,
});

/*attatch middlewares*/
app.use(morgan("dev")); // logger
app.use("/image", express.static(path.join(__dirname, "uploads")));
app.use(express.json()); // body parser
app.use(express.urlencoded({ extended: true }));

/*
const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};*/

/*for debugging on browser
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.get("/*", (req, res) => res.redirect("/")); //otherwise redirect to root
*/

/*router*/
app.post("/image", upload.single("image"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("No file");
  }
  const socketId = req.body.socketId;
  const socket = io.sockets.sockets.get(socketId); //get client's socket
  io.to(socket.room_name).emit("newImage", {
    image: `/uploads/${file.filename}`,
  }); //send path of uploaded image
  //it'll be automatically serialized, no need to call JSON.stringify() explicitly
  res.send("File uploaded successfully.");
});

/* chatting*/
clients = []; //all clients who are participating
waitings = []; //waiting queue

//when client is connected
io.on("connection", (socket) => {
  const req = socket.request;
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress; //get client's ip address
  const colorHash = new ColorHash();
  socket.nickname = colorHash.hex(socket.id); //default nickname setting using hash

  console.log(`client(${ip}) has just joined`);
  clients.push(socket);

  //socket.on("nicknameSubmit", (nickname) => {});

  socket.on("findPartner", (nickname) => {
    //data type: string
    //not considering duplicates
    if (nickname) {
      socket.nickname = nickname;
    } else {
      //if it's empty, use color hash as a nickname
      socket.emit("defaultNickname", socket.nickname);
    }
    console.log(socket.nickname);

    if (waitings.length == 0) {
      waitings.push(socket);
    } else {
      let waiting_socket = waitings.shift(); //match the one who waited longest
      const room_name = socket.id + " " + waiting_socket.id; //server-only concept
      waiting_socket.join(room_name);
      socket.join(room_name);

      waiting_socket.room_name = room_name; //add public room name as a property
      socket.room_name = room_name;
      io.to(room_name).emit("chatStart", "You can now start chatting"); //send system message to everyone in the room
      console.log("clients have matched successfully");
      // console.log(room_name);
      // console.log(waiting_socket.nickname);
      // console.log(socket.nickname);
    }
  });

  socket.on("message", (msg) => {
    // {"name" : socket.nickname, "payload" : message}
    socket.to(socket.room_name).emit("message", msg); //send message to everyone in the room 'except the sender'
  });

  socket.on("disconnecting", () => {
    // reserved event
    socket
      .to(socket.room_name)
      .emit("left", `${socket.nickname} has disconnected`);
    socket.leave(socket.room_name);
  });

  socket.on("disconnect", () => {
    // reserved event
    console.log(`client(${ip}) has just left`);
    clients.splice(clients.indexOf(socket), 1);
    // clients.forEach((item) => console.log(item.id));
  });
});

httpServer.listen(port, () =>
  console.log("Server is now running\nListening on http://127.0.0.1:3000")
);
