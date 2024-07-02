import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPage2Data = createAsyncThunk('page2/fetchData', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    return response.data;
});

const page2Slice = createSlice({
    name: 'page2',
    initialState: {comments: [], status: 'idle', error: null,},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPage2Data.pending, (state) => {
            state.status = 'loading';
        }).addCase(fetchPage2Data.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.comments = action.payload;
        }).addCase(fetchPage2Data.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});
export default page2Slice.reducer;