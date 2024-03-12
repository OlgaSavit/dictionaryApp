import {createSlice} from '@reduxjs/toolkit'
import {themeTypes} from '@/constants/theme'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: themeTypes.light
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
    }
  }
})

export const {setTheme, setThemeEntering} = themeSlice.actions
export default themeSlice.reducer
