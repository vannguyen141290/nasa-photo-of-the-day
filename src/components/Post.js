import "../App.css";
import '../index.css';
import React, { useState } from "react";
import styled from 'styled-components';


const StyledPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    text-align: center;
    text-wrap: inline;
    .date {
        padding: 20px;
    };
    button {
        border-radius: 5px;
        &:hover {
            color: white;
            background-color: grey;
        };
        padding: 5px;
    };
    .explanationText {
        width: 800px;
        border: white solid 1px;
        box-shadow: 5px 5px 15px 5px #756b6b;
        padding: 2%;
        border-radius: 5px;
    }

    .close {
        margin: 5px;
    }

    .explanation {
        padding: 2%;
        text-indent: 50px;
    }
`;

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
        width: '300px',
        height: '300px',
        objectFit: 'cover'
    }
    return (
        <StyledPost className='post'>
            <h3>{post.title}</h3>
            <img className='planetary-img' style={imgStyle} src={post.url} alt='Planetary' />
            <div className="date">Date: {post.date}</div>
            <button onClick={open}>Explanation</button>
            {detail && <div className='explanationText'>
                <div className="explanation">{post.explanation}</div>
                <button className='close' onClick={close}>Hide</button>    
            </div>}
        </StyledPost>
    )
}