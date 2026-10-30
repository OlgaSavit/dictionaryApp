import {createSlice} from '@reduxjs/toolkit'

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    routeName: null,
    langDirect: 'en-uk'
  },
  reducers: {
    setRouteName: (state, action) => {
      state.routeName = action.payload
    }
  }
})

export const {setRouteName} = globalSlice.actions
export default globalSlice.reducer
