import "./style.css";
import { useState } from "react";

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };
  return (
    <form className="form flex" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        type="text"
        placeholder="Co jest do zrobienia?"
        className="flex__item flex__item--first"
        autofocus
        onChange={({ target }) => setNewTaskContent(target.value)}
        required
      />
      <button className="addTaskButton flex__item">Dodaj zadanie</button>
    </form>
  );
};
export default Form;
