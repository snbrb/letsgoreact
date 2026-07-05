import FilterButton from "../../components/buttons/FilterButton";
import Summary from "../../components/text/Summary";

function Tasks() {
    // Sample tasks array for demonstration purposes
    const tasks: string[] = ["This is Task 1", "This is Task 2", "This isTask 3"];


    return (
        <div>
            <h1>Tasks</h1>
            <Summary title="Task Summary" content="3 total tasks" />

            <hr />

            <ul className="task-filters">
                <li><FilterButton label="All" onClick={() => { }} /></li>
                <li><FilterButton label="Completed" onClick={() => { }} /></li>
                <li><FilterButton label="Pending" onClick={() => { }} /></li>
            </ul>

            <hr />

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );

}

export default Tasks;