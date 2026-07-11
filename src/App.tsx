
// Importing an image = telling Vite "track this file, optimize it, 
// and give me the correct final URL to use." This ensures the image always works correctly,
// both in development and after building for production.


//import heroImg from './assets/hero.png'
import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import AddTask from './features/add_tasks/AddTask'
import TaskList from './features/view_tasks/TaskList'
import { useState } from 'react'
import { type Task, TaskStatus } from './features/view_tasks/taskTypes'
import { tasks as sampleTasks } from './features/view_tasks/TaskData'
function App() {
  //const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState<Task[]>(sampleTasks);

  function handleAddTask(taskName: string) {
    // Logic to add the task goes here
    console.log("Adding task:", taskName);
    const newTask: Task = {
      id: tasks.length + 1, // Simple ID generation; in a real app, use a better method
      title: taskName,
      status: TaskStatus.PENDING
    };
    setTasks([...tasks, newTask]);

  }

  //update task status function
  function updateTaskStatus(taskId: number, newStatus: TaskStatus) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }
  //handle delete task function
  function handleDeleteTask(taskId: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  return (
    <>
      <Header />
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onUpdateTaskStatus={updateTaskStatus} onDeleteTask={handleDeleteTask} />

      <Footer />

    </>
  )
}

export default App
