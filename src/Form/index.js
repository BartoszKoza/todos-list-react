import "./style.css";
const Form = () => (
  <form className="form flex">
    <input
      type="text"
      placeholder="Co jest do zrobienia?"
      className="flex__item flex__item--first"
      autofocus
    />
    <button className="addTaskButton flex__item">Dodaj zadanie</button>
  </form>
);
export default Form;
