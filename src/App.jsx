import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './routes/home'
import About from './routes/about'
import Projects from './routes/projects'
import Contact from './routes/contact'

function App() {
  return (
    <>
    <div className="App">
      <div className="container-wrap">
        
        <Router>

        <Header/>
        <div className="container">
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
          </div>
        </Router>
        
      
      
      
      </div>      
      
      <Footer/>
      
    </div>
    </>
  )
}
export default App
