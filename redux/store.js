import { configureStore } from "@reduxjs/toolkit";
import userId from "./userId";

export default configureStore({
  reducer: {
    setUser: userId,
  },
});
