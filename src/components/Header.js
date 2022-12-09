export function Header(props) {
    const {title, pushTodo, text} = props
  function addTodo(event) {
    if (event.key === "Enter" && event.target.value) {
      pushTodo(event.target.value);
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
        onKeyUp={addTodo}
      />
    </header>
  );
}
