// import
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Menu from './components/Menu'
import Home from './components/Home'
import About from  './components/About'
import Contact from  './components/Contact'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Pnf from './components/Pnf'

// body -> React functional component
function App(props) {
  return (
   <BrowserRouter>
       <Menu/>
       <Routes>
           <Route path={`/`} element={<Home/>} />
           <Route path={`/about`} element={<About/>} />
           <Route path={`/contact`} element={<Contact/>} />
           <Route path={`/projects`} element={<Projects/>} />
           <Route path={`/resume`} element={<Resume/>} />
           <Route path={`/*`} element={<Pnf/>} />
       </Routes>
   </BrowserRouter>
  )
}

// export
export default App                     