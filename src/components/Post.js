import "../App.css";
import '../index.css';
import React, { useState } from "react";

export default function Post(props) {
    const {post} = props;
    const [detail, setDetail] = useState(null);

    const open = () => {
        setDetail(true);
    }

    const close = () => {
        setDetail(false);

    }

    const imgStyle = {
        width: '200px',
        height: '200px',
        objectFit: 'cover'
    }
    return (
        <div className='post'>
            <h3>{post.title}</h3>
            <img className='planetary-img' style={imgStyle} src={post.url} alt='Planetary' />
            <div>Date: {post.date}</div>
            <button onClick={open}>Explanation</button>
            {detail && <div className='text'>
                <div>{post.explanation}</div>
                <button className='close' onClick={close}>Hide</button>    
            </div>}
        </div>
    )
}