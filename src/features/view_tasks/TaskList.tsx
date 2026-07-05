import { useState } from "react";
import FilterButton from "../../components/buttons/FilterButton";
import Summary from "../../components/text/Summary";
import type { Task } from "./taskTypes";
import { TaskStatus } from "./taskTypes";
import { tasks as sampleTasks } from "./TaskData";


// The Tasks component is responsible for displaying a list of tasks along 
// with filtering options and a summary of the tasks.
function TaskList() {
    // Sample tasks array for demonstration purposes
    const [tasks, setTasks] = useState<Task[]>(sampleTasks);

    // This function updates the status of a task to COMPLETED based on its ID.
    function markTaskAsCompleted(taskId: number) {
        // This function updates the status of a task to COMPLETED based on its ID.
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, status: TaskStatus.COMPLETED } : task
            )
        );
    }

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
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span>{task.title}</span><br />
                        <span>{task.status === TaskStatus.COMPLETED ? "Completed" : "Pending"}</span><br />
                        {task.status === TaskStatus.PENDING && (
                            <button onClick={() => markTaskAsCompleted(task.id)}>Mark as Completed</button>
                        )}<br />
                        <br /><br />
                    </li>
                ))}

            </ul>
        </div>
    );

}

export default TaskList;