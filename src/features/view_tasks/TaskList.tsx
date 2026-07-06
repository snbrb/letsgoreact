import { useEffect, useState } from "react";
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
    const [filter, setFilter] = useState<"ALL" | "COMPLETED" | "PENDING">("ALL");



    function handleFilterChange(newFilter: "ALL" | "COMPLETED" | "PENDING") {
        // This function updates the filter state based on the selected filter.
        setFilter(newFilter);
    }

    // This function updates the status of a task to COMPLETED based on its ID.
    function markTaskAsCompleted(taskId: number) {
        // This function updates the status of a task to COMPLETED based on its ID.
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, status: TaskStatus.COMPLETED } : task
            )
        );

    }

    // Filter the tasks based on the selected filter before rendering them.
    const visibleTasks: Task[] = tasks.filter((task) => {
        if (filter === "COMPLETED") return task.status === TaskStatus.COMPLETED;
        if (filter === "PENDING") return task.status === TaskStatus.PENDING;
        return true; // For "ALL" filter
    });


    const totalTasks = visibleTasks.length;


    return (
        <div>
            <h1>Tasks</h1>
            <Summary title="Task Summary" content={`${totalTasks} total tasks`} />

            <hr />

            <ul className="task-filters">
                <li><FilterButton label="All" onClick={() => handleFilterChange("ALL")} /></li>
                <li><FilterButton label="Completed" onClick={() => handleFilterChange("COMPLETED")} /></li>
                <li><FilterButton label="Pending" onClick={() => handleFilterChange("PENDING")} /></li>
            </ul>

            <hr />

            <ul>
                {visibleTasks.map((task) => (
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