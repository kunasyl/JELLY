import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../../AxiosBaseUrl';

const initialState = {
    messages: []
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    extraReducers: {

    }
});


export default chatSlice.reducer;