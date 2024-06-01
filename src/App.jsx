import "./assets/global.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Leadership from "./pages/Leadership/Leadership";
import Tracks from "./pages/Tracks/Tracks";


function App() {

  return (
    <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Leadership" element={<Leadership/>}/>
      <Route path="/Tracks" element={<Tracks/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
