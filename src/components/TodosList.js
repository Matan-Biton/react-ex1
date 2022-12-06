export function TodosList({ todos }) {
  function removeTodo(event, todo) {
    // const target = event.target.parentElement.parentElement;
    todos.splice(todos.indexOf(todo), 1);
    event.target.parentElement.parentElement.remove();
    console.log(todos);
  }

  function updateCompleted(todo) {
    todo.completed = !todo.completed
    console.log(todos)
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" onChange={() => updateCompleted(todo)}/>
            <label>{todo.title}</label>
            <button className="destroy" onClick={(e) => removeTodo(e, todo)} />
          </div>
          <input className="edit" />
        </li>
      ))}
    </ul>
  );
}
