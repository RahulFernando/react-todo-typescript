import { FC, useContext } from "react";
import Todo from "../models/todo";
import { TodosContext } from '../store/todos-context';

import classes from "./TodoItem.module.css";

const TodoItem: FC<{ item: Todo; }> = (
  props
) => {
  const { removeTodo } = useContext(TodosContext);
  return (
    <li
      className={classes.item}
      onClick={removeTodo.bind(null, props.item.id)}
    >
      {props.item.text}
    </li>
  );
};

export default TodoItem;
