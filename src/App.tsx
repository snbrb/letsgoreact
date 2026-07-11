
// Importing an image = telling Vite "track this file, optimize it, 
// and give me the correct final URL to use." This ensures the image always works correctly,
// both in development and after building for production.


//import heroImg from './assets/hero.png'
import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import AddTask from './features/add_tasks/AddTask'
import TaskList from './features/view_tasks/TaskList'
import { type Task, TaskStatus } from './features/view_tasks/taskTypes'
import { tasks as sampleTasks } from './features/view_tasks/TaskData'
import { useReducer } from "react";
import taskReducer from './app/state/task_reducer'



function App() {
  //const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(taskReducer, sampleTasks);

  function handleAddTask(taskName: string) {
    // Logic to add the task goes here
    console.log("Adding task:", taskName);

    const newTask: Task = {
      id: state.length + 1, // Simple ID generation; in a real app, use a better method
      title: taskName,
      status: TaskStatus.PENDING
    };

    dispatch({
      type: "ADD_TASK",
      payload: newTask,
    });

    // setTasks([...tasks, newTask]);

  }

  //update task status function
  function updateTaskStatus(taskId: number, newStatus: TaskStatus) {
    dispatch({
      type: "MARK_TASK_COMPLETED",
      payload: { id: taskId, title: "", status: newStatus }, // Provide a dummy task object with the ID to update
    });
  }
  //handle delete task function
  function handleDeleteTask(taskId: number) {
    dispatch({
      type: "DELETE_TASK",
      payload: { id: taskId, title: "", status: TaskStatus.PENDING }, // Provide a dummy task object with the ID to delete
    });
  }

  return (
    <>
      <Header />
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={state} onUpdateTaskStatus={updateTaskStatus} onDeleteTask={handleDeleteTask} />

      <Footer />

    </>
  )
}

export default App
