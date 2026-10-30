import { themeTypes } from "@/constants/theme";
import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: themeTypes.light,
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme, setThemeEntering } = themeSlice.actions;
export default themeSlice.reducer;
