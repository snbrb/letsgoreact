
// Importing an image = telling Vite "track this file, optimize it, 
// and give me the correct final URL to use." This ensures the image always works correctly,
// both in development and after building for production.


import heroImg from './assets/hero.png'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1>Lets Go React</h1>
      <img src={heroImg} alt="Hero Image" width="200" />

    </>
  )
}

export default App
