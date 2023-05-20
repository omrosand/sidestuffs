import { useState } from "react";
import { e } from "vitest/dist/index-60e2a8e1";

const Last = () => {
  const [inputValue, setInputValue] = useState(0);

  const numbers = [3, 2, 4, 1, 5];

  const secondHighestNumber = (arr: any) => {
    const copiedArr = [...arr];
    copiedArr.sort((a, b) => b - a);
    const secondHighest = copiedArr[1];
    const indexOfSecondHighest = arr.indexOf(secondHighest);
    return indexOfSecondHighest;
  };

  const numberFromIndex = (arr, index) => {
    return arr[index];
  };
  return (
    <>
      <h1>Yes</h1>
      <h2>Index of second highest number is: {secondHighestNumber(numbers)}</h2>
      <h2>{numberFromIndex(numbers, 0)}</h2>

      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <h2>{numbers.filter((number) => number === numbers[inputValue])}</h2>
    </>
  );
};
export default Last;
