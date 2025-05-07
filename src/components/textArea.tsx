import React from "react";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <textarea
      {...props}
      className={`border rounded px-3 py-2 outline-none focus:border-dashed focus:border-1 focus:border-grays ${
        props.className || ""
      }`}
    />
  );
};

export default TextArea;
