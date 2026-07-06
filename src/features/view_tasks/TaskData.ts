// Sample tasks array for demonstration purposes

import type { Task, } from "./taskTypes";
import { TaskStatus } from "./taskTypes";


// This array contains sample tasks with their respective IDs, titles, and statuses.
export const tasks: Task[] = [
    { id: 1, title: "This is Task 1.", status: TaskStatus.COMPLETED },
    { id: 2, title: "This is Task 2.", status: TaskStatus.COMPLETED },
    { id: 3, title: "This is Task 3.", status: TaskStatus.PENDING },
    { id: 4, title: "This is Task 4.", status: TaskStatus.PENDING },
    { id: 5, title: "This is Task 5.", status: TaskStatus.PENDING },
    { id: 6, title: "This is Task 6.", status: TaskStatus.PENDING },
    { id: 7, title: "This is Task 7.", status: TaskStatus.PENDING },
    { id: 8, title: "This is Task 8.", status: TaskStatus.COMPLETED },
    { id: 9, title: "This is Task 9.", status: TaskStatus.PENDING },
    { id: 10, title: "This is Task 10.", status: TaskStatus.COMPLETED }
];
