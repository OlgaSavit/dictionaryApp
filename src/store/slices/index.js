import { languageSlice } from "./languageSlice";
import { globalSlice } from "./globalSlice";
import { themeSlice } from "./themeSlice";
import { topicSlice } from "./topicSlice";
import { authSlice } from "./authSlice";
import { userSlice } from "./userSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  [globalSlice.name]: globalSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
  [languageSlice.name]: languageSlice.reducer,
  [languageSlice.name]: languageSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [topicSlice.name]: topicSlice.reducer,
  [userSlice.name]: userSlice.reducer,
});

export default rootReducer;
