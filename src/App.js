import HomePage from './home';
import ButtonAppBar from './components/appBar';
import './App.css';
import {Routes, Route, Link } from "react-router-dom";
import BasicCard from './components/other';
import Home from './welcome';
function App() {
  return (
    <div>
       <ButtonAppBar/>
       <Routes>
        <Route path="/Products" element={<HomePage />} />
        <Route path="/" element={<Home />} />
        <Route path="/view/:id" element={<BasicCard />} />
      </Routes>
    </div>
    );
}

export default App;
