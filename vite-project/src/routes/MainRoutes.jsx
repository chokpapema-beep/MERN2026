import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from '../components/Navbar'
import About from '../components/About'
import Course from '../components/Course'
import UseState from '../components/UseStatePractice'
import UseStatePractice from '../components/UseStatePractice'
import UseStatePractice2 from '../components/UseStatePractice2'
import UseEffectPractice from '../components/UseEffectPractice'
import UseStatePassword from '../components/Usestatepassword'

const MainRoutes = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
         <Route path="/" element={<div>hello from home routes</div>}></Route>
         <Route path="/about" element={<About productName="Lenovo" price="90,000"></About>}></Route>
         <Route path="/courses" element={<Course courseName="MERN STACK" price="5000"></Course>}></Route>
         <Route path="/store" element={<store></store>}></Route>
         <Route path="/useState" element={<UseStatePractice></UseStatePractice>}></Route>
         <Route path="/image" element={<UseStatePractice2/>}></Route>
         <Route path="/password" element={<UseStatePassword/>}></Route>
         <Route path="useeffect" element={<UseEffectPractice/>}></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes
