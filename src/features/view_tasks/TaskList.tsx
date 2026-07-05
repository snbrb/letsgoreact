import FilterButton from "../../components/buttons/FilterButton";
import Summary from "../../components/text/Summary";

interface Task {
    id: number;
    title: string;
    status: TaskStatus;
}

// Enum to represent the status of a task, either PENDING or COMPLETED.
enum TaskStatus {
    PENDING,
    COMPLETED,
}


// The Tasks component is responsible for displaying a list of tasks along 
// with filtering options and a summary of the tasks.
function TaskList() {
    // Sample tasks array for demonstration purposes
    const tasks: Task[] = [
        { id: 1, title: "This is Task 1", status: TaskStatus.COMPLETED },
        { id: 2, title: "This is Task 2", status: TaskStatus.COMPLETED },
        { id: 3, title: "This is Task 3", status: TaskStatus.PENDING }
    ];


    return (
        <div>
            <h1>Tasks</h1>
            <Summary title="Task Summary" content="3 total tasks" />

            <hr />

            <ul className="task-filters">
                <li><FilterButton label="All" onClick={() => { }} /></li>
                <li><FilterButton label="Completed" onClick={() => { }} /></li>
                <li><FilterButton label="Pending" onClick={() => { }} /></li>
            </ul>

            <hr />

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task.title}</span><br />
                        <span>{task.status === TaskStatus.COMPLETED ? "Completed" : "Pending"}</span>
                        <br /><br />
                    </li>
                ))}

            </ul>
        </div>
    );

}

export default TaskList;