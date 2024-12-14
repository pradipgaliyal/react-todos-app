function TodoRowItem(props) {
  // statically use variable
  //   const rowNumber = 1;
  //   const rowDesription = "Feed Dog";
  //   const rowAssign = "Eric";
  //   return (
  //     <>
  //       <tr>
  //         <th scope="row">{rowNumber}</th>
  //         <td>{rowDesription}</td>
  //         <td>{rowAssign}</td>
  //       </tr>
  //     </>
  //   );

  // Dynamically State Manage
  return (
    <tr onClick={() => props.deleteTodo(props.rowNumber)}>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssign}</td>
    </tr>
  );
}
export default TodoRowItem;
