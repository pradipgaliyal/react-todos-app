import "./App.css";
import React, { useState } from "react";
import TodoTable from "./component/TodoTable";
import NewTodoForm from "./component/NewTodoForm";
function App() {
  // const todos = [
  //   { rowNumber: 1, rowDescription: "Feed dog", rowAssign: "Eric" },
  //   { rowNumber: 2, rowDescription: "Water Plant", rowAssign: "User Two" },
  //   { rowNumber: 3, rowDescription: "Make Food", rowAssign: "User One" },
  //   { rowNumber: 4, rowDescription: "Charge Mobile", rowAssign: "User Two" },
  // ];

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed dog", rowAssign: "Eric" },
    { rowNumber: 2, rowDescription: "Water Plant", rowAssign: "User Two" },
    { rowNumber: 3, rowDescription: "Make Food", rowAssign: "User One" },
    { rowNumber: 4, rowDescription: "Charge Mobile", rowAssign: "User Two" },
  ]);

  // const todoAdd = () => {
  //   console.log("btn clicked");
  // };

  const addTodo = (description, assigned) => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: description,
        rowAssign: assigned
      };
      setTodos((todos) => [...todos, newTodo]);
      //todos.push(newTodo);
      console.log(todos);
    }
  };
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button className="btn btn-primary" onClick={addTodo}>
            Add Todos
          </button>
          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
