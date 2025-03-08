import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  id: null,
  uuid: null,
  name: null,
  email: null,
  phone: null,
  isEmailVerified: false,
  isPhoneVerified: false,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.id = payload.id;
      state.uuid = payload.uuid;
      state.name = payload.name;
      state.email = payload.email;
      state.isEmailVerified = payload.isEmailVerified;
      state.phone = payload.phone;
      state.isPhoneVerified = payload.isPhoneVerified;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.id = null;
      state.uuid = null;
      state.name = null;
      state.email = null;
      state.isEmailVerified = false;
      state.phone = null;
      state.isPhoneVerified = false;
      Cookies.remove("accessToken");
      // Cookies.remove("refreshToken");
    },
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, removeUser, isLoading } = authSlice.actions;

export default authSlice.reducer;
