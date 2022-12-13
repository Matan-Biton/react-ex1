import { useContext } from "react";
import { todosContext } from "../providers/todosContext";

export function Main({children}) {
  const { toggleAllTodos, isAllChecked } = useContext(todosContext);

  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        onClick={(event) => toggleAllTodos(event.target.checked)}
        checked={isAllChecked()}
      />
      {children}
    </section>
  );
}
