import { useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";


interface AddTaskProps {
    // You can define any props that the AddTask component might need here.
    // For example, a callback function to handle the addition of a new task.
    onAddTask: (taskName: string) => void;
}

// The AddTask component provides a user interface for adding new tasks. 
// It includes an input field for the task name and a button to submit the new task.
export default function AddTask({ onAddTask }: AddTaskProps) {

    const [taskName, setTaskName] = useState("");

    //handle add task logic here
    function handleAddTask() {
        const finalTaskName = taskName.trim();
        if (finalTaskName === "") {
            alert("Task name cannot be empty.");
            return;
        }
        // Logic to add the task goes here
        onAddTask(finalTaskName);
        setTaskName(""); // Clear the input after adding

    }

    //handle submit 
    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        handleAddTask();
    }

    return (
        <div>
            <h1>Add Task</h1>
            <p>This is the add task page.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="taskName">Task Name:</label>
                <input type="text" id="taskName" name="taskName" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                <PrimaryButton buttonType="submit">
                    Add Task
                </PrimaryButton>
            </form>
        </div>
    );
}