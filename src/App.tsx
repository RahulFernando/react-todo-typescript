import "./App.css";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";

import Todo from "./models/todo";
import { useState } from "react";

const DUMMY_TODOS = [new Todo("Learn React"), new Todo("Learn Typescript")];

function App() {
  const [todoList, setTodoList] = useState<Todo[]>(DUMMY_TODOS);

  const addNewTodoHandler = (text: string) => {
    setTodoList((prev) => [...prev, new Todo(text)]);
  };

  return (
    <div>
      <NewTodo onAddTodo={addNewTodoHandler} />
      <Todos items={todoList} />
    </div>
  );
}

export default App;
