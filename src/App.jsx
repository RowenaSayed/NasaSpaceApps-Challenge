import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navigation from './components/layout/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Analytics from './pages/Analytics'
import History from './pages/History'
import NavDashboard from './components/dashboard/NavDashboard'
import Login from './pages/loginPage'
import Signup from './pages/signupPage'
function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard */}
        <Route path="/dashboard/*" element={<NavDashboard />}>
          <Route path="analytics" element={<Analytics />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
