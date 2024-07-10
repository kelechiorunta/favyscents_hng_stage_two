import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLatestState = createAsyncThunk(
    //destructing the store and getting the getState() function
    async (_, { getState }) => {
        const state = getState();
        const latestCartItems = state.cart.cartitems;
        // Do something with the latest state
        console.log(latestCartItems);
        return latestCartItems;
      }
)