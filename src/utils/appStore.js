import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./bookMarkSlice";
const appStore = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
  },
});

export default appStore;