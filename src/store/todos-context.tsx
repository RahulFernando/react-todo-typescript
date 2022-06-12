import React, { createContext, FC, useState } from "react";

import Todo from "../models/todo";

type TodoContext = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = createContext<TodoContext>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

type Props = {
  children: React.ReactNode;
}

const TodosContextProvider: FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodoHandler = (text: string) => {
    setTodos((prev) => [...prev, new Todo(text)]);
  };

  const removeTodoHandler = (id: string) => {
    const list = todos.filter((todo: Todo) => todo.id !== id);
    setTodos(list);
  };

  const context: TodoContext = {
    items: todos,
    addTodo: addNewTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={context}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
