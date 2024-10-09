import React from 'react';
import "./navbar.css"
import {BrowserRouter as Router, Route ,Routes, Link} from "react-router-dom";
import Home from '../../pages/home';
import About from '../../pages/about';
import Contact from '../../pages/contact';
import Services from '../../pages/services';
import logo from "../../images/home3.jfif"
const Navbar = () => {
  return (
<Router>
    <div className="navbarcontainer">
<div className='navbar'>
<div className="navbarbarnd">
        <img src={logo} alt="" />
    </div>
    
    <ul>
   
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">about</Link>
        </li>
        <li>
            <Link to="/services">services</Link>
        </li>
        <li>
            <Link to="/contact">contact</Link>
        </li>
       
       
    </ul>
</div>
</div>
<div className="gold"></div>


<Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/services' element={<Services/>} />
</Routes>

</Router>
  )
}

export default Navbar;
