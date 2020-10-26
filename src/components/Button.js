import React from "react";

const Button = ({ num, inputNumber }) => {
  return (
    <button className="numBtn" value={num} onClick={inputNumber}>
      {num}
    </button>
  );
};

export default Button;
