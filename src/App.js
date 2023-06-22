import HomePage from './pages/home';
import ButtonAppBar from './components/appBar';
import './App.css';
import {Routes, Route, Link } from "react-router-dom";
import { AppBar } from '@mui/material';
import BasicCard from './components/other';
import Cart from './pages/cart';
import Home from './pages/welcome';
import Sign from './pages/signin';
import BasicCard1 from './components/other1';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
       <Routes>
        <Route path="/Products" element={<HomePage />} />
        <Route path="/" element={<Home />} />
        <Route path="/view/:id" element={<BasicCard />} />
        <Route path="/view1/:id" element={<BasicCard1 />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signin' element={<Sign></Sign>}/>
      </Routes>
      
    </div>
    
    );
}

export default App;
