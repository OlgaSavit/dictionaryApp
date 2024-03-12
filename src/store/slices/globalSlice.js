import {createSlice} from '@reduxjs/toolkit'

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    routeName: null
  },
  reducers: {
    setRouteName: (state, action) => {
      state.routeName = action.payload
    }
  }
})

export const {setRouteName} = globalSlice.actions
export default globalSlice.reducer
