'use client'
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '@/app/redux/redux'
import { thunk } from 'redux-thunk'

const store = configureStore({
    reducer: {
        cart: cartReducer
},  
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default store