import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPage3Data = createAsyncThunk('page3/fetchData', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    return response.data;
});


const page3Slice = createSlice({
    name: 'page3',
    initialState: {albums: [], status: 'idle', error: null,},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPage3Data.pending, (state) => {
            state.status = 'loading';
        }).addCase(fetchPage3Data.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.albums = action.payload;
        }).addCase(fetchPage3Data.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default page3Slice.reducer