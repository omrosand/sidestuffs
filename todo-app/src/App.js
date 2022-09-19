import { useState } from "react";
import "./App.scss";
import Title from "./components/Title";

function App() {
  const [todo, setTodo] = useState({ todoTitle: "", todoDesc: "" });
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setTodo((prev) => ({ ...prev, [inputName]: inputValue }));
  };
  const addTodo = (e) => {
    e.preventDefault();
    setTodos((prev) => [...prev, todo]);
    console.log(todos);
  };
  const completeTodo = (e) => {
    console.log(e);
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
        <button type="submit">Add</button>
      </form>
      <section>
        <Title name="My Todos" classProp="biggerTitle" />
        <ul id="todoList">
          {todos.map((task) => (
            <li key={task.todoTitle}>
              <Title name={task.todoTitle} classProp="label" />
              <p>{task.todoDesc}</p>
              <button type="button" onClick={completeTodo}>
                Complete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
