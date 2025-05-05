import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main.jsx'
import Navbar from './components/Navbar.jsx'


function App() {
  return(
    <>
      <Navbar />
      <Main />
    </>
  )
}

export default App
