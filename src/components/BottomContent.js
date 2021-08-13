
import '../index.css';
import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import axios from 'axios';
import { API_KEY } from "./api";
import styled from 'styled-components';

const StyledBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: vh;
    margin: auto;
    .posts-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px;
    };

`

  
export default function BottomContent() {
    const [posts, setPosts] = useState([]);
    const [err, setErr] = useState('');

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?count=6&api_key=${API_KEY}`)
            .then(res => {
                console.log(res.data);
                setPosts(res.data);
                
            })
            .catch(error => {
                console.log(error);
                setErr('There is something wrong')});


    }, []);

    return (
        <StyledBottom>
            <h2>Collections</h2>
            {err && <div>{err}</div>}
            <div className="posts-container">
                <Posts posts={posts}/>
            </div>
        </StyledBottom>
    );
}
  