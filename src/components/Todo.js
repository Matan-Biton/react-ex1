import { useState } from "react";

export function Todo(props) {
  const { switchStatus, removeTodo, editTodoName, todo } = props;
  const [editFlag, setEditFlag] = useState(false)

  function handleEdit() {
    setEditFlag(!editFlag)
  }

  return (
    <li className={(editFlag ? "editing" : "") + (todo.completed ? "completed" : "")}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => switchStatus(todo)}
        />
        <label onDoubleClick={handleEdit}>{todo.title}</label>
        <button className="destroy" onClick={() => removeTodo(todo)} />
      </div>
      <input
        className="edit"
        value={todo.title}
        onChange={(event) => editTodoName(todo, event.target.value)}
        onKeyUp={(event) => event.key === "Enter" && handleEdit()}
      />
    </li>
  );
}
