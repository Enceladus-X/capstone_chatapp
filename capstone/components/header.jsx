import React from 'react';

const styles = {
  Header: {
    top: '0px',
    width: '100%',
    height: '68px',
    backgroundColor: '#f7f5ff',
  },
};

const Header = (props) => {
  return (
    <div style={styles.Header}>
      {props.children}
    </div>
  );
};

export default Header;