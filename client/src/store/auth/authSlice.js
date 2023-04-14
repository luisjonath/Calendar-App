import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", //"authenticated", "not authenticated"
    user: {},
    errorMessage: undefined
  },
  reducers: {
    OnChecking: (state) => {
        state.status = "checking"
        state.user = {}
        state.errorMessage = undefined
    },
    OnLogin: (state, {payload}) => {
        state.status = "authenticated"
        state.user = payload
        state.errorMessage= undefined
    },
    onLogout: (state, {payload}) => {
        state.status = "not-authenticated"
        state.user = {}
        state.errorMessage = payload
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined
    }
  }
});

export const {OnChecking, OnLogin, onLogout, clearErrorMessage} = authSlice.actions

