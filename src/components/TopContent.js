import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "./api";

import styled from 'styled-components';


export default function TopContent() {
  const [error, setError] = useState(null);
  const [link, setLink] = useState('');

  useEffect(() => {
    axios(`https://api.nasa.gov/planetary/apod?count=1&api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data[0].hdurl);
        setLink(res.data[0].hdurl);
      })
      .catch(err => {
        console.error(err);
        setError('Something wrong happened!')
      });
  }, []);

  const StyledTopContent = styled.div`
    background-image: url(${link});

    h1, .text {
      color: ${pr => pr.theme.primaryColor};
    };

    text-shadow: -3px -3px 5px rgba(138, 138, 136, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 500px;
    width: 100%;
    margin: 2%;

    div {
      padding: 1%;
    }

    .topContentText {
      width: 50%;
    }
  `
  

  return (
    <StyledTopContent>
      {error && <h2 className='error'>{error}</h2>}
      <div className='topContentText'>
        <h1>NASA - PHOTOS OF THE DAY</h1>
        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div className='search-bar'>
          <input type='text' placeholder='search by title' />
          <button>Search</button>
        </div>
      </div>
    </StyledTopContent>
  )
};
