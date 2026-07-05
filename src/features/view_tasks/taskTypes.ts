
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

export { TaskStatus };
export type { Task };
