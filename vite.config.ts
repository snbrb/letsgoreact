// This file tells vite how to build the project. 
// when you build / run this project, use the React plugin so you understand JSX and React code properly.

//defineConfig is a helper function that provides type inference and validation for Vite configuration objects.
import { defineConfig } from 'vite'



// This plugin enables support for React in Vite projects,
// allowing you to use JSX and other React features seamlessly.
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
