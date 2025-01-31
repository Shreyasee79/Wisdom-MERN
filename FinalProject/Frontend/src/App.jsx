import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './Components/Search';
import Navbar from './Components/Navbar';
import AllNews from './Components/AllNews';
import Source from './Components/Source';
import Category from './Components/Category';
import Footer from './Components/Footer';

function App() {
    return(
        <>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<AllNews/>}/>
                    <Route path='/search/:keyword' element={<Search/>}/>
                    <Route path='/source-name/:source' element={<Source/>}/>
                    <Route path='/category-news/:category' element={<Category/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    )
}

export default App