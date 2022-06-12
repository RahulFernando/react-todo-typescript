import { FC, useContext } from "react";
import { TodosContext } from '../store/todos-context'

import TodoItem from './TodoItem';

import classes from './Todos.module.css';

const Todos: FC = () => {
  const { items } = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Todos;
