import "./style.css"

const Buttons = ({tasks, hideDoneTasks}) => {
    if(tasks.lenght === 0) {return
    }

    return (
        <div className="buttons">
            <button className="list_newButtons ">{hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone </button>
            <button 
                className = "list_newButtons"
                disabled = {tasks.every(({ done }) => done)}
            >
            Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;