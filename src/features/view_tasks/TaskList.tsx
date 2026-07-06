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


    // This effect runs whenever the filter state changes.
    // useEffect is a React hook that allows you to perform side effects in function components.
    // what is side effect? 
    // A side effect is any operation that affects something outside the scope of the function being executed. 
    // scope of function mean the function which is creating this component.
    // In React, side effects can include things like data fetching, subscriptions, 
    // or manually changing the DOM. 
    // The useEffect hook allows you to perform these side effects in a way that is
    //  consistent with React's rendering behavior.
    useEffect(() => {
        // This effect runs whenever the filter state changes.
        // It filters the tasks based on the selected filter and updates the tasks state.

        // update the tasks state based on the selected filter.
        switch (filter) {
            case "COMPLETED":
                setTasks(sampleTasks.filter((task) => task.status === TaskStatus.COMPLETED));
                break;
            case "PENDING":
                setTasks(sampleTasks.filter((task) => task.status === TaskStatus.PENDING));
                break;
            default:
                setTasks(sampleTasks);
        }


    }, [filter]);


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

    return (
        <div>
            <h1>Tasks</h1>
            <Summary title="Task Summary" content={`${tasks.length} total tasks`} />

            <hr />

            <ul className="task-filters">
                <li><FilterButton label="All" onClick={() => handleFilterChange("ALL")} /></li>
                <li><FilterButton label="Completed" onClick={() => handleFilterChange("COMPLETED")} /></li>
                <li><FilterButton label="Pending" onClick={() => handleFilterChange("PENDING")} /></li>
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