import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [id])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [id])

    return (
        <div>
            <h3>Post Detail: {id}</h3>
            <p><b>User Posted:</b> {post.id}</p>
            <p><b>Title:</b> {post.title}</p>
            <p><b>Post Body:</b> {post.body}</p>
            <p><b>Number of Comments:</b> {comments.length}</p>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;