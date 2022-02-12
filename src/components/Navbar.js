import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';
import ThemeBotton from './ThemeButton';

function Navbar() {

  const orderlist = useSelector((state) => state.order.value);
 
  return <div>
      <ul className="flex justify-around">
      <li className="mr-6">
      <Link to="/">
      <img
              className="sm:w-14 w-13 h-13  sm:h-12  mt-2"
              src="https://images.vexels.com/media/users/3/224174/isolated/lists/2f3f1f33abbb42fdbd2bd0926f684663-cutlery-on-plate-logo.png"
              alt=""
            ></img>
            </Link>
    </li> 
  <li className="mr-6 self-center">
  <Link to="/">Home</Link>
  </li>
  <li className='self-center'>
  <ThemeBotton/>
  </li>
  <li className="mr-6">
  <Link to="/orderlist">
  <img
              className="sm:w-14 w-13 h-13  sm:h-12  mt-2"
              src="https://cdn-icons-png.flaticon.com/512/3566/3566511.png"
              alt=""
            ></img>
    <h3 className='text-gre'>{orderlist.length}</h3>
  </Link>
  </li>
  
</ul>
<div className="bg-gre mb-6 h-0.5 " />
  </div>;
}

export default Navbar;
