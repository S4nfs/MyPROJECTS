import React from "react";

const Button = ({ children, btnClass, onClick }) => {
  return (
    <button onClick={onClick} className={`--btn ${btnClass}`}>
      {children}
    </button>
  );
};

export default Button;
