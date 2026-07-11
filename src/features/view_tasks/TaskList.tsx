import { useState } from "react";
import FilterButton from "../../components/buttons/FilterButton";
import Summary from "../../components/text/Summary";
import type { Task } from "./taskTypes";
import { TaskStatus } from "./taskTypes";
import TaskItem from "./TaskItem";
interface TaskListProps {
    tasks: Task[];
    onUpdateTaskStatus: (taskId: number, newStatus: TaskStatus) => void;
    onDeleteTask: (taskId: number) => void;
}


// The Tasks component is responsible for displaying a list of tasks along 
// with filtering options and a summary of the tasks.
function TaskList({ tasks, onUpdateTaskStatus, onDeleteTask }: TaskListProps) {
    // Sample tasks array for demonstration purposes

    const [filter, setFilter] = useState<"ALL" | "COMPLETED" | "PENDING">("ALL");

    // This function updates the filter state based on the selected filter.
    function handleFilterChange(newFilter: "ALL" | "COMPLETED" | "PENDING") {
        setFilter(newFilter);
    }

    // This function updates the status of a task to COMPLETED based on its ID.
    function markTaskAsCompleted(taskId: number) {
        onUpdateTaskStatus(taskId, TaskStatus.COMPLETED);
    }

    // Filter the tasks based on the selected filter before rendering them.
    const visibleTasks: Task[] = tasks.filter((task) => {
        if (filter === "COMPLETED") return task.status === TaskStatus.COMPLETED;
        if (filter === "PENDING") return task.status === TaskStatus.PENDING;
        return true; // For "ALL" filter
    });


    const totalTasks = visibleTasks.length;
    let content;
    if (totalTasks === 0) {
        content = <p>No tasks to display.</p>;
    } else {
        content = (
            <ul>
                {visibleTasks.map((task) => (
                    <TaskItem key={task.id} task={task} markTaskAsCompleted={markTaskAsCompleted} onDeleteTask={onDeleteTask} />
                ))}
            </ul>
        );
    }

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
            {content}
        </div>
    );

}

export default TaskList;