"use client"
import NavBar from './Components/NavBar'
import { useState } from 'react'
export default function Home() { 
  const [darkMode,setDarkMode]= useState(true)
  const handleTheme = () => {
    setDarkMode(!darkMode)
  }
  return (
    <main className={`flex min-h-screen flex-col p-24 item-center ${darkMode?"bg-gray-600 text-gray-200":"bg-gray-200 text-gray-800"} `}>
       <NavBar handleTheme={handleTheme} darkMode = {darkMode}/>
     
      <p>My name is Al Amin.</p>
     
    </main>
  )
}
