import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPage2Data } from '../store/page2Slice';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
    const dispatch = useDispatch();
    const { comments, status, error } = useSelector((state) => state.page2);
    const navigate = useNavigate();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPage2Data());
        }
    }, [status, dispatch]);

    return (
        <div>
            <h1>Page 2</h1>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <h3>{comment.name}</h3>
                    <p>Email: {comment.email}</p>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Page2;