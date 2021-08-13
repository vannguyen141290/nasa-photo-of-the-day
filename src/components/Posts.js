import "../App.css";
import '../index.css';
import React from "react";
import Post from './Post';

export default function Posts(props) {
    const {posts} = props;
    return (
        <>
            {posts.map(post => {
                return <Post key={post.title} post={post} />
            })}
        </>
    );
    
}