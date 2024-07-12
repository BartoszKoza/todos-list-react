import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={task.done && hideDone ? "listItemHidden" : "listItem"}
      >
        <button className="taskButton--done">{task.done ? "✔" : ""}</button>
        <span className={`taskContent ${task.done ? "listItemDone" : ""}`}>
          {task.content}
        </span>
        <button
          className="taskButton--remove"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);
export default Tasks;
