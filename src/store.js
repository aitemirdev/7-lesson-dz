import { configureStore } from '@reduxjs/toolkit';
import page1Reducer from './store/page1Slice';
import page2Reducer from './store/page2Slice';
import page3Reducer from './page3Slice';

const store = configureStore({
    reducer: {
        page1: page1Reducer,
        page2: page2Reducer,
        page3: page3Reducer,
    },
});

export default store;