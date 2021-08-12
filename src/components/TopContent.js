import axios from "axios";
import React, { useEffect, useState } from "react";

import "../index.css";
import { API_KEY } from "./api";


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
  

  return (
    <div 
      style={{ 
        backgroundImage: `url(${link})`,
        height: '500px',
        width: '100wv',
        objectFit: 'cover'
      }}>

      {error && <h2 className='error'>{error}</h2>}
      <h1 style={{color: 'white'}}>WELL COME TO NASA COLELLECTIONS!</h1>
      <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</div>
      <div className='search-bar'>
        <input type='text' placeholder='search by title' />
        <button>Search</button>
      </div>
    </div>
  )
};
