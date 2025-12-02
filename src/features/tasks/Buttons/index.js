import { useDispatch, useSelector } from "react-redux";
import { DivButton, Division } from "./styled";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
  const {tasks, hideDone} = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
  <Division>
    {tasks.length > 0 && (
      <>
        <DivButton onClick={()=>dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone{" "}
        </DivButton>
        <DivButton
          className="buttons_button"
          disabled={tasks.every(({ done }) => done)}
          onClick={()=>dispatch(setAllDone())}
        >
          Ukończ wszystkie
        </DivButton>
      </>
    )}
  </Division>
);
}

export default Buttons;
