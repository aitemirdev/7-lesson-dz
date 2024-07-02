import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPage3Data } from '../page3Slice';
import { useNavigate } from 'react-router-dom';

const Page3 = () => {
    const dispatch = useDispatch();
    const { albums, status, error } = useSelector((state) => state.page3);
    const navigate = useNavigate();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPage3Data());
        }
    }, [status, dispatch]);

    return (
        <div>
            <h1>Page 3</h1>
            {albums.map((album) => (
                <div key={album.id}>
                    <h3>{album.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default Page3;