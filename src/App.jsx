import React, { useEffect } from "react";

const Title = () => (
  <h1 className="w-full p-20 text-4xl text-center bg-teal-200 ">To Do List</h1>
);

const Subtitle = () => (
  <h2 className="p-10 text-xl text-center bg-teal-200">Things to do</h2>
);

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

  const InputResult = (props) => (
    <div className="flex p-10">
      <input
        type="checkbox"
        onChange={(e) => props.handleChange(e, props.index)}
      />
      <p
        className="p-2 text-xl"
        style={{
          textDecoration: checkedItems[props.index] ? "line-through" : "none",
        }}
      >
        {props.text}
      </p>
    </div>
  );

  return (
    <div className="w-screen h-screen bg-white justify-items-center">
      <Title />

      <form
        className="flex justify-center w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center py-6 m-10 border-b border-teal-500">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
          />
          <button
            type="submit"
            className="flex-shrink-0 px-2 py-1 text-sm text-white bg-teal-500 border-4 border-teal-500 rounded hover:bg-teal-700 hover:border-teal-700"
          >
            Submit
          </button>
        </div>
      </form>
      <Subtitle />
      <div className="">
        {inputs.map((input, index) => (
          <InputResult
            key={index}
            text={input}
            handleChange={handleChange}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default InputForm;
