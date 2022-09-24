import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = []

const URL = "https://jsonplaceholder.typicode.com/users"

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const fetched = await fetch(URL)
    const response = await fetched.json()
    return response;
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
    },
    
    extraReducers(builder){
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.push(...action.payload)
        })
    }

})

export const selectAllUsers = (state) => state.users

export const usersReducer = usersSlice.reducer