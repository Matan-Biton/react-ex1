export function Footer(props) {
  const {clearCompleted, itemsLeft} = props
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong> items left
      </span>
      <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
    </footer>
  );
}