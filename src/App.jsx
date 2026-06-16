import React from 'react'
import Greeting from './DashboardTask/Greeting'
import Welcome from './DashboardTask/Welcome'
import EmployeeProfile from './DashboardTask/EmployeeProfile'
import CurrentProjects from './DashboardTask/CurrentProjects'
import TeamNotices from './DashboardTask/TeamNotices'
import Contact from './DashboardTask/Contact'
import './App.css'

function App() {
  return (
    <>
    <link rel="stylesheet" href="App.css" />
      <Greeting/>
      <Welcome/>
      <EmployeeProfile/><br />
      <CurrentProjects/><br />
      <TeamNotices/>
      <Contact/>
    </>
  )
}

export default App

import React from 'react'

import Cars from './component/Cars'
import Bikes from './component/Bikes'
import Trucks from './component/Trucks'
import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        
          <button className='bb'><NavLink to = "/">Bike </NavLink></button>
          <button className='bb'><NavLink to = "/car">Car </NavLink></button>
          <button className='bb'><NavLink to = "/truck">Truck </NavLink> </button>
        
        <Routes>
          <Route path = '/' element = {<Bikes/>}/>
          <Route path = '/car' element = {<Cars/>}/>
          <Route path = '/truck' element = {<Trucks/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App


import React from 'react'
import Home from './component/Home'
import Result from './component/Result'
import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <nav className="navbar">
          <NavLink to="/">Home</NavLink>
      </nav>

      <Routes>
          <Route path="/" element = {<Home/>}></Route>
          <Route path="/result/:regno" element={<Result />}></Route>
        </Routes>
    </Router>
        
    </>
  )
}

export default App
