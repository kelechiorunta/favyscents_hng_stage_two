'use client'
import { createSlice, configureStore } from "@reduxjs/toolkit";

const sliceCartReducer = createSlice({
    name: 'cart',
    initialState: {
      cartitems: { id: 0, description: '', cart_price: 0, quantity: 1, selectedcartItems:[] }
    },
    reducers: {
       update: (state, action) => {
           return state     
        },
      addItem: (state=initialState, action) => {
        const { id, product_name, price } = action.payload;
        // const parsedPrice = parseInt(price.toString().slice(1), 10);
        var updatePrice = 0;
        var updatequantity = 1;
        const parsedPrice = parseFloat(price.replace(/[^0-9.-]+/g,""));
        // Update the existing cart item
        state.cartitems.id = id;
        state.cartitems.description = product_name;
        state.cartitems.quantity += 1;
        const selectedCartProducts = {id, product_name, price}
        state.cartitems.cart_price += parsedPrice;

        const existingItem = state.cartitems.selectedcartItems.find(item=>{return item.id == (id)})
        
        
        if (existingItem){
            const {id, product_name, price } = existingItem
          const parsedexistingItemPrice = parseFloat(price.replace(/[^0-9.-]+/g,""));
          updatequantity += 1
          updatePrice = parsedPrice + parseFloat(price.replace(/[^0-9.-]+/g,""))//* updatequantity//(state.cartitems.quantity-1)//parseInt(existingItem.price.toString().slice(1), 10);//state.cartitems.cart_price;
          existingItem.price = '#'+updatePrice//parsedexistingItemPrice
          // state.cartitems.selectedcartItems = [...state.cartitems.selectedcartItems, {cart_price: parsedPrice}]
        }else
        {
          updatequantity = 0
          updatePrice = 0
          state.cartitems.selectedcartItems.push(selectedCartProducts)
          
        }
        
      },
      removeItem: (state, action) => {
        const { id, price } = action.payload;
        const parsedPrice = parseInt(price.toString().slice(1), 10);
  
        // Ensure the item exists and the quantity is greater than 0
        if (state.cartitems.id === id && state.cartitems.quantity > 0) {
          state.cartitems.quantity -= 1;
          state.cartitems.cart_price -= parsedPrice;
  
          // Reset the item if quantity becomes 0
          if (state.cartitems.quantity === 0) {
            state.cartitems = { id: 0, description: '', cart_price: 0, quantity: 1 };
          }
        }
      }
    }
  });

export const { addItem, removeItem, update } = sliceCartReducer.actions

export default sliceCartReducer.reducer