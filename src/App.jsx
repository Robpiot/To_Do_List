import React from "react";

const Title = () => (
  <h1 className=" bg-gray-200 text-4xl text-center p-20 w-full">To Do List</h1>
);

const Subtitle = () => (
  <h2 className="text-xl text-center p-10 bg-gray-200">Things to do</h2>
);

const InputResult = (props) => (
  <div className="flex p-10">
    <input type="checkbox" />
    <p className="ml-2">{props.text}</p>
  </div>
);

const InputForm = () => {
  const [inputs, setInputs] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputs((prevInputs) => [...prevInputs, inputValue]);
    setInputValue("");
  };

  return (
    <div className="w-screen h-screen justify-items-center bg-white">
      <Title />

      <form
        className="w-full max-w-sm flex justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center border-b border-teal-500 py-6 m-10">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            Submit
          </button>
        </div>{" "}
      </form>
      <Subtitle />
      <div className="">
        {inputs.map((input, index) => (
          <InputResult key={index} text={input} />
        ))}
      </div>
    </div>
  );
};

export default InputForm;
