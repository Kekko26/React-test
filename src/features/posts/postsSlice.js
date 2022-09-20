import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns"

const initialState = [
    {   id: 1, 
        title: "River log", 
        content: "a log falled into a river causing a house to be destroyed",
        date: sub(new Date(), {minutes: 10}).toISOString(),
        reactions:{
            "Thumb up": 0,
            "Heart": 0,
            "Coffee": 0,
            "Wow": 0
        }
    },
    {   id: 2, 
        title: "Circus hacks", 
        content: "some people used to enter circus without paying for tickets, arrested",
        date: sub(new Date(), {minutes: 3}).toISOString(),
        reactions:{
            "Thumb up": 0,
            "Heart": 0,
            "Coffee": 0,
            "Wow": 0
        }
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdd:{
            reducer:(state,action) => [...state, action.payload],

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
                const post = state.find(item => item.id == postId)
                if(post){
                    post.reactions[reaction]++
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts
export const { postAdd, reactionAdd} = postsSlice.actions
export const postsReducer = postsSlice.reducer