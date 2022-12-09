import { Todo } from "./Todo";

export function TodosList(props) {
  const { todos, switchStatus, removeTodo, editTodoName } = props;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} switchStatus={switchStatus} removeTodo={removeTodo} editTodoName={editTodoName} />
      ))}
    </ul>
  );
}
