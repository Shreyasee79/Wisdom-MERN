import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Explore from './Components/Explore'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'

function App(){
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/about_us" element={<About/>}/>
      <Route path="/contact_us" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App