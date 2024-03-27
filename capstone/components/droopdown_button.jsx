import React from "react";

const defaultProps = {
  label: "",
  values: [],
};

const Dropdown = (props) => {
  return (
    <select style={styles.Dropdown} defaultValue="">
      <option value="" disabled hidden>
        {props.label ?? defaultProps.label}
      </option>
      {(props.values ?? defaultProps.values).map((value) => (
        <option value={value} key={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
