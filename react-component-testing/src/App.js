import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { GoThroughList } from "./components/GoThroughList";

const myList = ["Ole", "Michelle", "Barney"];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter count={count} setCount={setCount} />
      <GoThroughList count={count} myList={myList} />
    </div>
  );
}

export default App;
