import { createSlice } from "@reduxjs/toolkit";

export const userAuthentificationSlice = createSlice({
  name: "userAuthentificationSlice",
  initialState: {
    isAuthentificated: false,
    user: {},
    token: "",
  },

  reducers: {
    userAuthentification: (state, action) => {
      const { user, token } = action.payload;
      state.isAuthentificated = true;
      state.user = user;
      state.token = token;
    },
    userLogOut: (state, _) => {
      state.isAuthentificated = false;
      state.user = {};
      state.token = "";
    },
  },
});

export const selectAuthedUser = (state) => state.userAuthentification;
export const userAuthentificationActions = userAuthentificationSlice.actions;
export const userAuthentificationReducers = userAuthentificationSlice.reducer;
