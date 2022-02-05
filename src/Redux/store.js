import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./ThemeSlice";
import OrderSlice from "./OrderSlice";


const store = configureStore({
    reducer:{theme: themeSlice,
             order: OrderSlice,}
});


export default store