import { useState, useEffect } from "react";

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [todosLeftCount, setTodosLeftCount] = useState(0);

  useEffect(() => {
    const todosLeft = todos.filter((todo) => !todo.completed);
    setTodosLeftCount(todosLeft.length);
  });

  function addTodo(title) {
    const newTodos = [...todos, { id: Date.now(), title: title, completed: false }];
    setTodos(newTodos);
  }

  function removeTodo(todoToRemove) {
    const newTodos = todos.filter((todo) => todo.id !== todoToRemove.id);
    setTodos(newTodos);
  }

  function toggleTodo(todo) {
    todo.completed = !todo.completed;
    setTodos([...todos]);
  }

  function editTodoName(todoToChange, newName) {
    todoToChange.title = newName;
    setTodos([...todos]);
  }

  function clearCompletedTodos() {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }

  function toggleAllTodos(isToggleAllChecked) {
    const newTodos = todos.map((todo) => ({ ...todo, completed: isToggleAllChecked }));
    setTodos(newTodos);
  }

  const isAllChecked = () => todos.every((todo) => todo.completed);

  return {
    todos,
    todosLeftCount,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodoName,
    clearCompletedTodos,
    toggleAllTodos,
    isAllChecked,
  };
}
