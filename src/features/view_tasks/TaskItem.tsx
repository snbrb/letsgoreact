import PrimaryButton from "../../components/buttons/PrimaryButton";
import { TaskStatus, type Task } from "./taskTypes";

interface TaskItemProps {
    task: Task;
    markTaskAsCompleted: (taskId: number) => void;
    onDeleteTask: (taskId: number) => void;
}


function TaskItem({ task, markTaskAsCompleted, onDeleteTask }: TaskItemProps) {

    // handle delete task logic here
    function handleDeleteTask() {
        console.log("Deleting task:", task.id);
        console.log(onDeleteTask);
        onDeleteTask(task.id);
    }

    return (
        <li>
            <span>{task.title}</span><br />
            <span>{task.status === TaskStatus.COMPLETED ? "Completed" : "Pending"}</span><br />
            {task.status === TaskStatus.PENDING && (
                <button onClick={() => markTaskAsCompleted(task.id)}>Mark as Completed</button>
            )}<br />
            <PrimaryButton onClick={handleDeleteTask}>Delete Task</PrimaryButton><br />
            <br /><br />
        </li>
    );
}

export default TaskItem;