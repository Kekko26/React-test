import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns"

const initialState = {
    posts: [],
    status: "idle",
    error: null
}

const URL = "https://jsonplaceholder.typicode.com/posts"

export const fetchPost = createAsyncThunk('posts/fetchPost', async () =>{
    const fetched = await fetch(URL)
    const response = await fetched.json()
    return response
})


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdd:{
            reducer:(state,action) => void(state.posts.push(action.payload)),

            prepare(title, content, userId){
                return {
            payload:{
                id: nanoid(), 
                title,
                content,
                date: new Date().toISOString(),
                userId,
                reactions:{
                    "Thumb up": 0,
                    "Heart": 0,
                    "Coffee": 0,
                    "Wow": 0
                }
                    }
                }
            }
        }, 

        reactionAdd:{
            reducer:(state, action) => {
                const {postId, reaction} = action.payload
                const post = state.posts.find(item => item.id == postId)
                if(post){
                    post.reactions[reaction]++
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state, action) => {
                state.status = 'Loading...'
            })

            .addCase(fetchPost.fulfilled, (state,action)=>{
                state.status = 'Successful'
                //Add time and reactions since on fetched data there isnt any
                let min = 1;
                const loadedPosts = action.payload.map(post => {
                    post.date = sub(new Date(), {minutes: min++}).toISOString()
                    post.reactions = {
                        "Thumb up": 0,
                        "Heart": 0,
                        "Coffee": 0,
                        "Wow": 0
                    }
                    return post;
                })

                state.posts = ([...state.posts], loadedPosts)
            })

            .addCase(fetchPost.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const selectAllPosts = (state) => state.posts.posts
export const getStatus = (state) => state.posts.status
export const getError = (state) => state.posts.error


export const { postAdd, reactionAdd} = postsSlice.actions
export const postsReducer = postsSlice.reducer