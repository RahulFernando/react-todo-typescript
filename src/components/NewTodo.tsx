import React, { FC, useRef } from "react";

import classes from './NewTodo.module.css';

const NewTodo: FC<{ onAddTodo: (text: string) => void; }> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const text = inputRef.current!.value;
        props.onAddTodo(text);
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
