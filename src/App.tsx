
// Importing an image = telling Vite "track this file, optimize it, 
// and give me the correct final URL to use." This ensures the image always works correctly,
// both in development and after building for production.


//import heroImg from './assets/hero.png'
import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import AddTask from './features/add_tasks/add_task'
import Tasks from './features/view_tasks/tasks'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AddTask />
      <Tasks />

      <Footer />

    </>
  )
}

export default App
