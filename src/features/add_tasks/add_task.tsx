export default function AddTask() {
    return (
        <div>
            <h1>Add Task</h1>
            <p>This is the add task page.</p>
            <form>
                <label htmlFor="taskName">Task Name:</label>
                <input type="text" id="taskName" name="taskName" />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}