
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OrderList from './components/OrderList';
import {Routes ,Route} from 'react-router-dom';
import {useSelector} from 'react-redux'

function App() {
  const isDark = useSelector(state => state.theme.isDark)
  return (
    <div className={`App h-full ${isDark ? 'dark' : null}`}>
  <Navbar/>
  <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="orderlist" element={<OrderList/>}/>
      </Routes>
    </div>
  );
}

export default App;
