import { TodosList } from "./TodosList";

export function Main({ todos }) {
  
  function toggleAll() {
    const targetState = !(todos.every((todo) => todo.completed));
    todos.forEach((todo) => { todo.completed = targetState });
    console.log();
  }

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" onClick={toggleAll}/>
      <TodosList todos={todos} />
    </section>
  );
}
