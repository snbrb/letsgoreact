import { TaskStatus, type Task } from "./taskTypes";

interface TaskItemProps {
    task: Task;
    markTaskAsCompleted: (taskId: number) => void;
}


function TaskItem({ task, markTaskAsCompleted }: TaskItemProps) {



    return (
        <li>
            <span>{task.title}</span><br />
            <span>{task.status === TaskStatus.COMPLETED ? "Completed" : "Pending"}</span><br />
            {task.status === TaskStatus.PENDING && (
                <button onClick={() => markTaskAsCompleted(task.id)}>Mark as Completed</button>
            )}<br />
            <br /><br />
        </li>
    );
}

export default TaskItem;