import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'


const App = () => {
  return (
    <div>
      <Navbar />

      <Home />

    </div>
  )
}

export default App
