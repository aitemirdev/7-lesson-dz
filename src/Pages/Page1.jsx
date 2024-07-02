import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPage1Data} from '../store/page1Slice';
import {useNavigate} from 'react-router-dom';



const Page1 = () => {
    const dispatch = useDispatch();
    const { posts, status, error } = useSelector((state) => state.page1);
    const navigate = useNavigate();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPage1Data());
        }
    }, [status, dispatch]);

    return (
        <div>
            <h1>Page 1</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body.substring(0, 100)}...</p>
                </div>
            ))}
        </div>
    );

}

export default Page1;