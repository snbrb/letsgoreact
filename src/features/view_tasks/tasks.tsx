import FilterButton from "../../components/buttons/FilterButton";

function Tasks() {
    return (
        <div>
            <h1>Tasks</h1>
            <p>This is the tasks page.</p>

            <hr />
            <ul className="task-filters">
                <li><FilterButton label="All" onClick={() => { }} /></li>
                <li><FilterButton label="Completed" onClick={() => { }} /></li>
                <li><FilterButton label="Pending" onClick={() => { }} /></li>
            </ul>

            <hr />

            <ul>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
            </ul>
        </div>
    );

}

export default Tasks;