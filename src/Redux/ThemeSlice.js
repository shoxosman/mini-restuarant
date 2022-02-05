import { createSlice } from "@reduxjs/toolkit";

const iState = {
    isDark: JSON.parse(localStorage.getItem('darkTheme') ) || false
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: iState,
    reducers:{
        toggle(state){
            state.isDark = !state.isDark
            localStorage.setItem('darkTheme', state.isDark)
        },
    }
})


export const themeActions = themeSlice.actions

export default themeSlice.reducer