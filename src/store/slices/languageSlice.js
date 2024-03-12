import {createSlice} from '@reduxjs/toolkit'
import {languages} from '@/constants/language'

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: languages.en.code
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload
    }
  }
})

export const {setLanguage} = languageSlice.actions
