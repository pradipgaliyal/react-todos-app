import TodoRowItem from "./TodoRowItem";
function TodoTable(props) {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Assign</th>
          </tr>
        </thead>
        <tbody>
          {/* use Map for automatically render each element of todos  */}

          {props.todos.map((todo) => (
            <TodoRowItem
              rowNumber={todo.rowNumber}
              rowDescription={todo.rowDescription}
              rowAssign={todo.rowAssign}
            />
          ))}
          {/* <tr>
                <th scope="row">1</th>
                <td>Feed Dog</td>
                <td>Eric</td>
              </tr> */}
          {/* <tr>
                <th scope="row">2</th>
                <td>Get haircut</td>
                <td>Eric</td>
              </tr> */}

          {/* // use for dynamically data render  */}
          {/* <TodoRowItem
            rowNumber={props.todos[0].rowNumber}
            rowDescription={props.todos[0].rowDescription}
            rowAssign={props.todos[0].rowAssign}
          /> */}
          {/* <TodoRowItem
            rowNumber={props.todos[1].rowNumber}
            rowDescription={props.todos[1].rowDescription}
            rowAssign={props.todos[1].rowAssign}
          />
          <TodoRowItem
            rowNumber={props.todos[2].rowNumber}
            rowDescription={props.todos[2].rowDescription}
            rowAssign={props.todos[2].rowAssign}
          /> */}
        </tbody>
      </table>
    </>
  );
}
export default TodoTable;
