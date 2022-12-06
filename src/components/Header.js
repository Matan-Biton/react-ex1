export function Header(props) {
    const {pushTodo, title, placeholder} = props
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
        placeholder={placeholder}
        autoFocus
        onKeyUp={addTodo}
      />
    </header>
  );
}
