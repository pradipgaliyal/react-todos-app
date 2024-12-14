import React, { useState } from "react";

function NewTodoForm(props) {
  const [description, setDiscription] = useState("");
  const [assigned, setAssign] = useState("");

  // const descriptionChange = (event) => {
  //   console.log("description", event.target.value);
  //   setDiscription(event.target.value);
  // };

  // const assignChange = (event) => {
  //   console.log("assign", event.target.value);
  //   setAssign(event.target.value);
  // };

  const submitTodo = () => {
    if (description !== "" && assigned !== "") {
      props.addTodo(description, assigned);
      setAssign("");
      setDiscription("");
    }
  };
  return (
    <div className="mt-5">
      {/* <form onSubmit={submitTodo}> */}
      <form>
        <div className="mb-3">
          <label className="form-label">Assign</label>
          <input
            type="text"
            className="form-control"
            required
            //onChange={assignChange}
            // instead of write a assignChange function we can direct pass arrow function in onChange
            onChange={(e) => setAssign(e.target.value)}
            value={assigned}
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-lable">Description</label>
          <textarea
            type="text"
            className="form-control"
            row={3}
            required
            //onChange={descriptionChange}
            // instead of write a descriptionChange function we can direct pass arrow function in onChange
            onChange={(e) => setDiscription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        {/* <button className="btn btn-primary"> */}
        <button className="btn btn-primary" onClick={submitTodo}>
          Add Todo
        </button>
      </form>
    </div>
  );
}
export default NewTodoForm;
