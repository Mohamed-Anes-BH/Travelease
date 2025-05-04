import React, { useState } from 'react';
import '../css/Navbar.css'; // Your custom CSS
import { IoIosNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';

function NavBar() {
 return (
<div className="navbar">
  <div className='logo'>
      <a href="#">TravelEase</a>
  </div>
  <div className='list'>
    <a href="#">Hotel</a>
    <a href="#">Rental</a>
    <a href="#">Car</a>
    

  </div>
  <div className='btn-sign'>
    <Link to="/login" className='btn-login'>Login</Link>
    <Link to="/signup" className='btn-signup'>Sign up</Link>
  </div>
  
</div>
  );
}

export default NavBar;