import { useTodos } from "../hooks/useTodos.js";
import { todosContext } from "../providers/todosContext";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { TodosList } from "../components/TodosList";
import "../index.css"

export function TodosPage() {
  const todosApi = useTodos();

  return (
    <todosContext.Provider value={todosApi}>
      <section className="todoapp">
        <Header title="Todos List" text="Whats needs to be done?"/>
        <Main>
          <TodosList />
        </Main>
        <Footer />
      </section>
    </todosContext.Provider>
  );
}
