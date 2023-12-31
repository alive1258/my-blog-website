import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import BlogDetails from './pages/BlogDetails'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
            errorElement={<p>Something went wrong</p>}
          />
          <Route path="post/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
