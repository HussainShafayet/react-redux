import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/postsSlice", async ()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //console.log('res', res);
    return res.data;
})

 const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        posts: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getPosts.pending, (state, action)=>{
            state.isLoading = true;
        });
        builder.addCase(getPosts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.posts = action.payload;
            state.error = null
        });
        builder.addCase(getPosts.rejected, (state, action)=>{
            state.isLoading = false;
            state.posts = [];
            state.error = action.payload.message
        })
    }
 });
 export default postsSlice.reducer;