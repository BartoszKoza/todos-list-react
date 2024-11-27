import { useState, useRef } from "react";
import { AddTaskButton, Input, Structure } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
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
        autofocus
        onChange={({ target }) => setNewTaskContent(target.value)}
        required
      />
      <AddTaskButton onClick={focusInput}>
        Dodaj zadanie
      </AddTaskButton>
    </Structure>
  );
};
export default Form;
