import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        name: 'Bui Thanh TU',
    },
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut: (state) => {
            state.user = {
                name: 'Logged out',
            }
        },
    },
    extraReducers: (builder) => {},
})

export const { logOut } = userSlice.actions

export default userSlice.reducer
