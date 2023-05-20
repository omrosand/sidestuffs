import { useState, useEffect } from "react";

const ICanDoIt = () => {
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const myArr = [3, 1, 8, 5, 7];

  const sortedArr = myArr.sort((a, b) => a - b);

  const nextToLast = () => {
    setIndex(sortedArr.length - 2);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const findIndex = () => {
    setIndex(inputValue);
  };

  return (
    <>
      <h1>I can maybe do it</h1>
      {sortedArr.map((number, index) => (
        <li key={index}>
          <p>
            Index: {index}, Value: {number}
          </p>
        </li>
      ))}
      <input type="number" value={inputValue} onChange={handleChange} />
      <button onClick={findIndex}>Find input index</button>
      <button onClick={nextToLast}>Next to last in array</button>
      {index > -1 && index < sortedArr.length ? (
        <h2>
          Index: {index}, value: {sortedArr[index]}
        </h2>
      ) : (
        <h2>Number must be between 0 - {sortedArr.length - 1}</h2>
      )}
    </>
  );
};
export default ICanDoIt;
