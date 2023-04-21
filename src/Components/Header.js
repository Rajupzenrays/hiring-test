import React from 'react';
import './style.css'
import logo from '../assets/Logo.svg'

function Header() {
  return (
    <header className='main_container'>
      <img src={logo} alt="Logo" className='logo' />
      <nav>
        <ul className='ul_list'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">Case Studies</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>

          <button className='schedule_btn'>Schedule a call</button>

        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
