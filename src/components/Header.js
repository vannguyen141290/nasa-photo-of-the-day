import React from "react";

import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2% 3% 1% 3%;
    .logo {
        display: flex;
        width: 7%;
        padding: 0 20px;
        justify-content: space-between;
        border: solid red 1px;
        align-items: center;
        margin: 0 30px;
    }
    .logo div {
        font-size: 20px;
    }
`;


export default function Header () {
    const logoStyle ={
      width: "50px",
      height: "50px",
      objectFit: 'cover'
    };
  
    return (
      <StyledHeader className='nav-container'>
          <div className='logo'>
              <img src='124-1240796_nasa-nasa-space-ship-nasalogo-aesthetic-cool-cute.png' alt='Nasa Logo' style={logoStyle}/>
              <div>NASA</div>
          </div>
          <div className='navigation'>
              <nav>
                  <button>HOME</button>
                  <button>ABOUT</button>
                  <button>COLLECTIONS</button>
                  <button>CONTACT</button>
              </nav>
          </div>
      </StyledHeader>
  )
}