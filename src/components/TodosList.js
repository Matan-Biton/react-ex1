import { Todo } from "./Todo";
import { todosContext } from "../providers/todosContext";
import { useContext } from "react";

export function TodosList() {
  const { todos, toggleTodo, removeTodo, editTodoName } = useContext(todosContext);

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} editTodoName={editTodoName} />
      ))}
    </ul>
  );
}
