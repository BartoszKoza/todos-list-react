import { useState, useRef } from "react";
import { AddTaskButton, Input, Structure } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");


  const dispatch = useDispatch();
  
  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
  };

  

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <Structure onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        type="text"
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({ target }) => setNewTaskContent(target.value)}
        required
      />
      <AddTaskButton onClick={focusInput}>Dodaj zadanie</AddTaskButton>
    </Structure>
  );
};
export default Form;
