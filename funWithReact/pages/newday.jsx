const NewDay = () => {
  const myArr = [3, 1, 5, 2, 4];
  const letterArr = ["e", "r", "e", "t", "n"];

  const secondToMaxValueInArr = (arr) => {
    const copiedArr = [...arr];
    const sortedArr = copiedArr.sort((a, b) => b - a);
    return sortedArr[1];
  };

  const getValueFromIndex = (arr, index) => {
    const chosenValue = arr[index];
    return chosenValue;
  };

  const convertArrToEvensOnly = (arr) => {
    const copiedArr = [...arr];
    const filteredArr = copiedArr.filter((number) => number % 2 === 0);
    return filteredArr;
  };

  return (
    <>
      <h2>Second to max: {secondToMaxValueInArr(myArr)}</h2>
      <h2>Chosen value: {getValueFromIndex(myArr, 1)}</h2>
      <h2>
        Even numbers from original array:
        {convertArrToEvensOnly(myArr).map((number) => (
          <p key={number}>{number}</p>
        ))}
      </h2>
    </>
  );
};
export default NewDay;
