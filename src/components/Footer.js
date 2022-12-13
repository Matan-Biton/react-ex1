import { useContext } from "react";
import { todosContext } from "../providers/todosContext";

export function Footer() {
  const { clearCompleted, todosLeftCount } = useContext(todosContext)
  
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todosLeftCount}</strong> items left
      </span>
      <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
    </footer>
  );
}