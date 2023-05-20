import type { NextPage } from "next";
import { useState } from "react";

const Test2: NextPage = () => {
  const [index, setIndex] = useState({ index: 0, value: 0 });
  const [inputValue, setInputValue] = useState(0);

  const array = [7, 3, 5, 2];

  const sortedArray = array.sort((a, b) => a - b);

  const nextToLast = () => {
    console.log(sortedArray);

    setIndex({
      index: sortedArray.length - 2,
      value: sortedArray[sortedArray.length - 2],
    });
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const findNumber = () => {
    setIndex({ index: inputValue, value: sortedArray[inputValue] });
  };

  return (
    <>
      <h1>Testing</h1>
      {index.index > -1 && index.index < sortedArray.length ? (
        <h1>
          {index.index}: {index.value}
        </h1>
      ) : (
        <h1>Number must be between 0 - {sortedArray.length - 1}</h1>
      )}
      <button onClick={nextToLast}>Find next to last index</button>
      <input type="number" value={inputValue} onChange={handleChange} />
      <button onClick={findNumber}>Find number on index</button>
    </>
  );
};
export default Test2;
