import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("card")) || [],
  
  
};
const TheCardsSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToOrderList: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem("card", JSON.stringify(state.value));
    },
    removeFromOrderList: (state, action) => {
      state.value.forEach((foods, index) => {
        if (foods?.name === action.payload) {
          state.value.splice(index, 1);
          localStorage.setItem("foods", JSON.stringify(state.value));
        }
      });
    },
    Increase_Quantity: (state, action) => {
        console.log(action.payload);
  
        state.value.forEach((foods, index) => {
          if (foods?.name === action.payload) {
            
            state.value[index].quantity+=1;
  
          }
        });
      },
      
      Decrease_Quantity: (state, action) => {
        console.log(action.payload);
  
        state.value.forEach((foods, index) => {
          if (foods?.name === action.payload &&  state.value[index].quantity > 1) {
            
            state.value[index].quantity--;
  
          }
        });
      },
    
  },
});

export const { addToOrderList, removeFromOrderList ,Increase_Quantity,
  Decrease_Quantity, } = TheCardsSlice.actions;
export default TheCardsSlice.reducer;