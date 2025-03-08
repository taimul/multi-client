// src/redux/feature/toast/toastSlice.js
import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    message: "",
    isVisible: false,
    type: "info", // info, success, error
  },
  reducers: {
    setError: (state, action) => {
      if (state.isVisible) {
        state.isVisible = false;
      }
      state.message = action.payload;
      state.isVisible = true;
      state.type = "error";
    },
    setSuccess: (state, action) => {
      if (state.isVisible) {
        state.isVisible = false;
      }
      state.message = action.payload;
      state.isVisible = true;
      state.type = "success";
    },
    setInfo: (state, action) => {
      if (state.isVisible) {
        state.isVisible = false;
      }
      state.message = action.payload;
      state.isVisible = true;
      state.type = "info";
    },
    hideToast: (state) => {
      state.isVisible = false;
    },
  },
});

export const { setError, setSuccess, setInfo, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
