import { useContext } from "react";
import { todosContext } from "../providers/todosContext";

export function Header(props) {
  const { addTodo } = useContext(todosContext)
  const { title, text } = props

  function handleEnter(event) {
    if (event.key === "Enter" && event.target.value) {
      addTodo(event.target.value);
      event.target.value = "";
    }
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <input
        className="new-todo"
        placeholder={text}
        autoFocus
        onKeyUp={handleEnter}
      />
    </header>
  );
}
