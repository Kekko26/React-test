import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 0, name: 'George Washington'},
    {id: 1, name: 'Emmanuel Kant'},
    {id: 2, name: 'Perry cox'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{

    }
})

export const selectAllUsers = (state) => state.users

export const usersReducer = usersSlice.reducer