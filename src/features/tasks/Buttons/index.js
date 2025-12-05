import { useDispatch, useSelector } from "react-redux";
import { DivButton, Division } from "./styled";
import { selectTasksState, toggleHideDone, setAllDone, selectAreTasksEmpty, selectAllDone, fetchExampleTasks } from "../tasksSlice";

const Buttons = () => {
  const {hideDone} = useSelector(selectTasksState);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const everyDone = useSelector(selectAllDone);
  const dispatch = useDispatch();
  return (
  <Division>
    <DivButton onClick={()=>dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zadania
    </DivButton>
    {areTasksEmpty && (
      <>
        <DivButton onClick={()=>dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone{" "}
        </DivButton>
        <DivButton
          className="buttons_button"
          disabled = {everyDone}
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
