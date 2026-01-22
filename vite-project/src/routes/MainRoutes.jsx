import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from '../components/Navbar'
import About from '../components/About'
import Course from '../components/Course'
const MainRoutes = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
         <Route path="/" element={<div>hello from home routes</div>}></Route>
         <Route path="/about" 
         element={<About productName="Lenova" price="90,000"></About>}></Route>
         <Route path="/courses" 
         element={<Course courseName="MERN STACK" price="5000"></Course>}></Route>
         <Route path="/store" element={<store></store>}></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes
