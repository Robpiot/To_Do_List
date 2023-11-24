import React, { useEffect } from "react";
import InputResult from "./InputResult";

const InputForm = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [checkedItems, setCheckedItems] = React.useState({});

  const savedInputs = JSON.parse(localStorage.getItem("inputs")) || [];
  const [inputs, setInputs] = React.useState(savedInputs);

  useEffect(() => {
    localStorage.setItem("inputs", JSON.stringify(inputs));
  }, [inputs]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputs((prevInputs) => [...prevInputs, inputValue]);
    setInputValue("");
  };

  function handleChange(event, index) {
    setCheckedItems((prev) => ({ ...prev, [index]: event.target.checked }));
  }

  return (
    <div className="w-screen h-screen bg-white justify-items-center">
      {inputs.map((input, index) => (
        <InputResult
          key={index}
          text={input}
          index={index}
          handleChange={handleChange}
          checkedItems={checkedItems}
        />
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default InputForm;
