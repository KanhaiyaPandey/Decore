/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";



const themes = {
    retro: 'retro',
    coffee: 'coffee',
  };

  const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('theme') || themes.retro;
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
  };


const initialState = {
    user: { username: 'coding addict' },
    theme: getThemeFromLocalStorage(),
  };

  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      loginUser: (state, action) => {
        console.log('login');
      },
      logoutUser: (state) => {
        console.log('logout');
      },
      toggleTheme: (state) => {
        const { retro, coffee } = themes;
        state.theme = state.theme === coffee ? retro : coffee;
        document.documentElement.setAttribute('data-theme', state.theme);
        localStorage.setItem('theme', state.theme);
      },
    },
  });
  
  export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
  
  export default userSlice.reducer;