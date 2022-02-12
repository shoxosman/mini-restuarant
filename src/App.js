
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OrderList from './components/OrderList';
import {Routes ,Route} from 'react-router-dom';
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);
  
  return (
  <div className={`App h-screen ${darkMode ? 'dark' : null}`}>
    
  <Navbar/> 
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="orderlist" element={<OrderList/>}/>
   </Routes>
  </div>
  );
}

export default App;
