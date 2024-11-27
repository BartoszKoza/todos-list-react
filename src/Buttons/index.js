import { DivButton, Division } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <Division>
    {tasks.length > 0 && (
      <>
        <DivButton onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone{" "}
        </DivButton>
        <DivButton
          className="buttons_button"
          disabled={tasks.every(({ done }) => done)}
          onClick={setAllDone}
        >
          Ukończ wszystkie
        </DivButton>
      </>
    )}
  </Division>
);

export default Buttons;
