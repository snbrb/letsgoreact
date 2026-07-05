import PrimaryButton from "../../components/buttons/PrimaryButton";

export default function AddTask() {
    return (
        <div>
            <h1>Add Task</h1>
            <p>This is the add task page.</p>
            <form>
                <label htmlFor="taskName">Task Name:</label>
                <input type="text" id="taskName" name="taskName" />
                <PrimaryButton onClick={() => { /* Handle add task logic here */ }}>
                    Add Task
                </PrimaryButton>
            </form>
        </div>
    );
}