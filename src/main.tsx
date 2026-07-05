import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


// It uses the createRoot 
// function from ReactDOM to create a root container in the HTML element with the id 'root'. Finally, 
// it renders the App component wrapped in StrictMode, which helps identify potential problems in the
// application during development.


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
