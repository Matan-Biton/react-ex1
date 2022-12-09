export function Main(props) {
  const { toggleAllTodos, isAllChecked, children } = props;

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
