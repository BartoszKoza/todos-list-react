import { useDispatch } from "react-redux";
import { DivButton } from "../TasksPage/Buttons/styled";
import { fetchExampleTasks } from "../tasksSlice";
import { useState } from "react";

const FetchExampleTasksButton = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);


    const onClick = () => {
        setLoading(true);
        dispatch(fetchExampleTasks());

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

  return (
    <DivButton onClick={onClick} disabled = {loading}>
      {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </DivButton>
  );
};

export default FetchExampleTasksButton;
