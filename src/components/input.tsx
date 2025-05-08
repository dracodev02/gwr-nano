import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className={`border rounded-lg px-3 py-2 outline-none focus:border-dashed focus:border-1 focus:border-grays ${
        props.className || ""
      }`}
    />
  );
};

export default Input;
