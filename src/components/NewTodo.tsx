import React, { FC, useContext, useRef } from "react";

import { TodosContext } from '../store/todos-context';

import classes from './NewTodo.module.css';

const NewTodo: FC = () => {
    const { addTodo } = useContext(TodosContext);
    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const text = inputRef.current!.value;
        addTodo(text);
    }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Save</button>
    </form>
  );
};

export default NewTodo;
