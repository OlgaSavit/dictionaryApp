import {combineReducers} from 'redux'
import {globalSlice} from './globalSlice'
import {themeSlice} from './themeSlice'
import {languageSlice} from './languageSlice'
import {authSlice} from './authSlice'
import {topicSlice} from './topicSlice'
import {userSlice} from './userSlice'

const rootReducer = combineReducers({
  [globalSlice.name]: globalSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
  [languageSlice.name]: languageSlice.reducer,
  [languageSlice.name]: languageSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [topicSlice.name]: topicSlice.reducer,
  [userSlice.name]: userSlice.reducer
})

export default rootReducer
