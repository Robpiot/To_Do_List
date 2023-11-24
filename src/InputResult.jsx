import React from "react";

const InputResult = ({ handleChange, index, text, checkedItems }) => (
  <div className="flex p-10">
    <input type="checkbox" onChange={(e) => handleChange(e, index)} />
    <p
      className="p-2 text-xl"
      style={{
        textDecoration: checkedItems[index] ? "line-through" : "none",
      }}
    >
      {text}
    </p>
  </div>
);

export default InputResult;
