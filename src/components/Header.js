import React from "react";

import '../index.css';

export default function Header () {
    const logoStyle ={
      width: "50px",
      height: "50px",
      objectFit: 'cover'
    };
  
    return (
      <div className='nav-container'>
          <div className='logo'>
              <img src='124-1240796_nasa-nasa-space-ship-nasalogo-aesthetic-cool-cute.png' alt='Nasa Logo' style={logoStyle}/>
              <span>NASA</span>
          </div>
          <div className='navigation'>
              <nav>
                  <button>HOME</button>
                  <button>ABOUT</button>
                  <button>COLLECTIONS</button>
                  <button>CONTACT</button>
              </nav>
          </div>
      </div>
  )
}