import "./style.css"

const Tasks = (props) => (
    <ul className="js-tasks tasks">
        {props.tasks.map(task => (
            <li key={task.id} 
                className = {task.done && props.hideDoneTasks? "listItemHidden" : "listItem"}
            >
                <button className="taskButton--done"> 
                {task.done ? "✔" : ""}
                </button>
                <span className={`taskContent ${task.done ? "listItemDone" : ""}`}>
                    {task.content}
                </span>
                <button className="taskButton--remove">🗑</button>
            </li>
        ))}
    </ul>
)
export default Tasks;