import { useState } from "react";

export const GoThroughList = ({ myList, count }) => {
  const [name, setName] = useState(myList[0]);
  const [currentCount, setCurrentCount] = useState(0);

  const cycleList = () => {
    if (name === myList[0]) {
      setName(myList[1]);
      setCurrentCount(count + currentCount);
    }
    if (name === myList[1]) {
      setName(myList[2]);
      setCurrentCount(count + currentCount);
    }
    if (name === myList[2]) {
      setName(myList[0]);
      setCurrentCount(count + currentCount);
    }
    console.log(name);
  };
  return (
    <>
      <p>
        {name} gets number {currentCount}
      </p>
      <button type="button" onClick={cycleList}>
        Next
      </button>
    </>
  );
};
