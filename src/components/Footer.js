export function Footer(props) {
  const { clearCompleted, todosLeft } = props
  
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todosLeft}</strong> items left
      </span>
      <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
    </footer>
  );
}