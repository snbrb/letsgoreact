import { type Task, TaskStatus } from "../../features/view_tasks/taskTypes";



// Define the AppAction interface to represent the structure of actions dispatched in the app
interface AppAction {
    type: string;
    payload: Task
}

// Task reducer function to handle state changes based on dispatched actions
function taskReducer(state: Task[], action: AppAction) {


    // Handle different action types to update the state accordingly
    switch (action.type) {
        case "ADD_TASK":
            // Add a new task to the state by appending it to the existing array of tasks
            return [...state, action.payload];
        case "DELETE_TASK":
            // Delete a task from the state by filtering it out
            return state.filter(task => task.id !== action.payload.id);
        case "MARK_TASK_COMPLETED":
            // Mark a task as completed by updating its status
            return state.map(task =>
                task.id === action.payload.id ? { ...task, status: action.payload.status } : task
            );
        default:
            return state;
    }
}


export default taskReducer;