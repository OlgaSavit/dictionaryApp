import {combineReducers} from 'redux'
import {globalSlice} from './globalSlice'
import {themeSlice} from './themeSlice'
import {languageSlice} from './languageSlice'
import {authSlice} from './authSlice'
import {topicSlice} from './topicSlice'

const rootReducer = combineReducers({
  [globalSlice.name]: globalSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
  [languageSlice.name]: languageSlice.reducer,
  [languageSlice.name]: languageSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [topicSlice.name]: topicSlice.reducer
})

export default rootReducer
