import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  const todos = [
    { title: "Learn React", completed: false },
    { title: "Learn React2", completed: false },
    { title: "Learn React3", completed: false },
  ];

  const title = "Todos List";
  const placeholder = "What needs to be done?";
  const itemsLeft = todos.filter((todo) => !todo.completed).length;
  
  function pushTodo(title) {
    todos.push({ title: title, completed: false });
    console.log(todos);
  }

  function clearCompleted() {
    const completedTodos = todos.filter((todo) => todo.completed);
    completedTodos.forEach((todo) => todos.splice(todos.indexOf(todo), 1));
    console.log(todos);
  }

  return (
    <section className="todoapp">
      <Header pushTodo={pushTodo} title={title} placeholder={placeholder} />
      <Main todos={todos} />
      <Footer clearCompleted={clearCompleted} itemsLeft={itemsLeft} />
    </section>
  );
}

export default App;
