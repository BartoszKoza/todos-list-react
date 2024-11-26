import "./style.css";
import { useState, useRef } from "react";

const Form = ({addNewTask}) => {
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
    <form className="form flex" onSubmit={onFormSubmit}>
      <input
        ref={inputRef}
        value={newTaskContent}
        type="text"
        placeholder="Co jest do zrobienia?"
        className="flex__item flex__item--first"
        autofocus
        onChange={({ target }) => setNewTaskContent(target.value)}
        required
      />
      <button onClick={focusInput} className="addTaskButton flex__item">Dodaj zadanie</button>
    </form>
  );
};
export default Form;
