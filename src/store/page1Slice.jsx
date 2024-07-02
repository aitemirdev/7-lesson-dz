import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPage1Data = createAsyncThunk('page1/fetchData', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
});

const page1Slice = createSlice({
    name: 'page1',
    initialState: {posts: [], status: 'idle', error: null,},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPage1Data.pending, (state) => {
            state.status = 'loading';
        }).addCase(fetchPage1Data.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload;
        }).addCase(fetchPage1Data.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default page1Slice.reducer;