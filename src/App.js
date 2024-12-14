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

  const [showNewTodo, setShowNewTodo] = useState(false);
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed dog", rowAssign: "Eric" },
    { rowNumber: 2, rowDescription: "Water Plant", rowAssign: "User Two" },
    { rowNumber: 3, rowDescription: "Make Food", rowAssign: "User One" },
    { rowNumber: 4, rowDescription: "Charge Mobile", rowAssign: "User Two" },
  ]);

  // const todoAdd = () => {
  //   console.log("btn clicked");
  // };

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  };

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssign: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
    //todos.push(newTodo);
    console.log(todos);
  };
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            className="btn btn-primary"
            onClick={() => setShowNewTodo(!showNewTodo)}
          >
            {showNewTodo ? "Close Todo" : "New Todo"}
          </button>
          {showNewTodo && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
