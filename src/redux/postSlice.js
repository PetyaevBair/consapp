import { createSlice } from "@reduxjs/toolkit";


const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: []
    },
    reducers:{
        addPost(state, action) {
            state.posts.push({
                id: state.posts.length + 1, 
                text: action.payload.postText
            });
        },
        removePost(state, action) {
            state.posts = state.posts.filter(post => post.id !== action.payload.postId);
        }
    }
})

export const {addPost, removePost} = postSlice.actions;

export default postSlice.reducer;