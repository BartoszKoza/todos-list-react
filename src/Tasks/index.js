import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={
          task.done && hideDoneTasks ? "listItemHidden" : "listItem"
        }
      >
        <button className="taskButton--done">{task.done ? "✔" : ""}</button>
        <span className={`taskContent ${task.done ? "listItemDone" : ""}`}>
          {task.content}
        </span>
        <button className="taskButton--remove">🗑</button>
      </li>
    ))}
  </ul>
);
export default Tasks;
