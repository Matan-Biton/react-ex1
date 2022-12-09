import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { TodosList } from "./components/TodosList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todosLeftCount, setTodosLeftCount] = useState(0);

  useEffect(() => {
    const todosLeft = todos.filter(todo => !todo.completed)
    setTodosLeftCount(todosLeft.length)
  })
  
  const appTitle = "TodosList";

  function addTodo(title) {
    const newTodos = [...todos, { id: Date.now(), title: title, completed: false }];
    setTodos(newTodos)
  }

  function removeTodo(todoToRemove) {
    const newTodos = todos.filter(todo => todo.id !== todoToRemove.id);
    setTodos(newTodos)
  }

  function switchStatus(todo) {
    todo.completed = !todo.completed;
    setTodos([...todos])
  }

  function editTodoName(todoToChange, newName) {
    todoToChange.title = newName
    setTodos([...todos])
  }
  
  function clearCompleted() {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }
  
  function toggleAllTodos(isToggleAllChecked) {
    const newTodos = todos.map(todo => ({ ...todo, completed: isToggleAllChecked }))
    setTodos(newTodos)
  }

  const isAllChecked = () => todos.every(todo => todo.completed)

  return (
    <section className="todoapp">
      <Header title={appTitle} pushTodo={addTodo} text="What needs to be done?" />
      <Main toggleAllTodos={toggleAllTodos} isAllChecked={isAllChecked}>
        <TodosList
          todos={todos}
          switchStatus={switchStatus}
          removeTodo={removeTodo}
          editTodoName={editTodoName}
        />
      </Main>
      <Footer clearCompleted={clearCompleted} todosLeft={todosLeftCount} />
    </section>
  );
}

export default App;
