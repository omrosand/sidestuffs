import type { NextPage } from "next";
import { SetStateAction, useState } from "react";

const Home: NextPage = () => {
  const [count, setCount] = useState(0);
  const numbers = [1, 3, 7, 10, 6, 2, 34, 103, 51, 4];

  const sortNumbers = () => {
    numbers.sort((a, b) => a - b);
    console.log(numbers);
    console.log(numbers[numbers.length - 2]);
  };

  const forEachClick = () => {
    numbers.forEach((number, index) => console.log(number, index));
  };

  const mapClick = () => {
    const usedMap: any = numbers.map((number) => number > 20);
    console.log(usedMap);
  };

  const filterClick = () => {
    const filtered = numbers.filter((number) => number > 30);
    console.log(filtered);
  };

  const reduceClick = () => {
    const reduced = numbers.reduce((result, number) => {
      return result + number;
    }, 0);
    console.log(reduced);
  };

  const someClick = () => {
    const someNumbers = numbers.some((number) => number > 102);
    console.log(someNumbers);
  };

  const everyClick = () => {
    const everyNumber = numbers.every((number) => number > 0);
    console.log(everyNumber);
  };

  const findClick = () => {
    const findNumber = numbers.find((number) => number === 34);
    console.log(findNumber);
  };

  const findIndexClick = () => {
    const findIndexNumber = numbers.findIndex((number) => number === 34);
    console.log(findIndexNumber);
  };
  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleFind = () => {
    if (count > -1 && count < numbers.length) {
      console.log(numbers[count]);
    } else {
      console.log(`Number must be between 0-${numbers.length}`);
    }
  };

  return (
    <>
      <h1>Dette er forsiden</h1>
      <button onClick={sortNumbers}>Sort numbers</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>
            <span>{index}</span>: {number}
          </li>
        ))}
      </ul>
      <button onClick={forEachClick}>forEach</button>
      <button onClick={mapClick}>map</button>
      <button onClick={filterClick}>filter</button>
      <button onClick={reduceClick}>reduce</button>
      <button onClick={someClick}>some</button>
      <button onClick={everyClick}>every</button>
      <button onClick={findClick}>find</button>
      <button onClick={findIndexClick}>findIndex</button>
      <input onChange={handleChange} type="number" value={count} />
      <button onClick={handleFind}>Find number from input index</button>
    </>
  );
};

export default Home;
