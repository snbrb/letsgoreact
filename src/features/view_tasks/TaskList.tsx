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
                        <span>{task.status === TaskStatus.COMPLETED ? "Completed" : "Pending"}</span>
                        <br /><br />
                    </li>
                ))}

            </ul>
        </div>
    );

}

export default TaskList;