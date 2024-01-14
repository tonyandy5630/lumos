// @ts-nocheck
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { userSlice } from './slice/userSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            userAuthenticate: userSlice,
        },
    })
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch
export const useAppSelector = useSelector
export const useAppStore = useStore
