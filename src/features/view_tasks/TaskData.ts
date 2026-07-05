// Sample tasks array for demonstration purposes

import type { Task, } from "./taskTypes";
import { TaskStatus } from "./taskTypes";


// This array contains sample tasks with their respective IDs, titles, and statuses.
export const tasks: Task[] = [
    { id: 1, title: "This is Task 1.", status: TaskStatus.COMPLETED },
    { id: 2, title: "This is Task 2.", status: TaskStatus.COMPLETED },
    { id: 3, title: "This is Task 3.", status: TaskStatus.PENDING }
];
