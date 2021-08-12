import "../App.css";
import '../index.css';
import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import axios from 'axios';
import { API_KEY } from "./api";



  
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
        <>
            <h2>Collections</h2>
            {err && <div>{err}</div>}
            <div>
                <Posts posts={posts}/>
            </div>
        </>
    );
}
  