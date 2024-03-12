import {createSlice} from '@reduxjs/toolkit'
import {userRefreshTokenRequest} from '@/api/requests/auth'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user_token: null,
    refresh_user_token: null,
    isAuthenticated: false
  },
  reducers: {
    setUserToken: (state, action) => {
      state.user_token = action.payload
    },
    setRefreshUserToken: (state, action) => {
      state.refresh_user_token = action.payload
    },
    setAuthStatus: (state, action) => {
      state.isAuthenticated = action.payload
    }
  }
})
export const {setUserToken, setRefreshUserToken, setAuthStatus} =
  authSlice.actions
