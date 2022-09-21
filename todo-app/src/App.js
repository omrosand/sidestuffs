import { useState } from "react";
import "./App.scss";
import Title from "./components/Title";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    todoTitle: "",
    todoDesc: "",
    todoPrio: "",
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    console.log(inputName, inputValue);
    setTodo((prev) => ({ ...prev, [inputName]: inputValue }));
  };
  const addTodo = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, todo]);
  };

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <label htmlFor="todoTitle">
          <Title name="Title: " classProp="label" />
        </label>
        <input
          type="text"
          id="todoTitle"
          name="todoTitle"
          onChange={handleChange}
        />
        <label htmlFor="todoDesc">
          <Title name="Description: " classProp="label" />
        </label>
        <input
          type="textarea"
          id="todoDesc"
          name="todoDesc"
          onChange={handleChange}
        />
        <label htmlFor="todoPrio">
          <Title name="Priority: " classProp="label" />
        </label>
        <select id="todoPrio" name="todoPrio" onChange={handleChange}>
          <option disabled defaultValue="Choose priority" selected>
            Choose priority
          </option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button type="submit">Add</button>
      </form>
      <section>
        <Title name="My Tasks" classProp="biggerTitle" />
        <ul id="todoList">
          {todos.map((task) => (
            <li key={task.todoTitle}>
              <h3>{task.todoPrio}</h3>
              <Title name={task.todoTitle} classProp="label" />
              <p>{task.todoDesc}</p>
              <button type="button">Complete</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
export default App;
