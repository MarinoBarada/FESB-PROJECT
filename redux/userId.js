import { createSlice } from "@reduxjs/toolkit";

export const userId = createSlice({
  name: "setUser",
  initialState: { id: null, ime: null },
  reducers: {
    set: (state, action) => {
      const { id, name, type } = action.payload;
      state.id = id;
      state.name = name;
      state.type = type;
    },
  },
});

export const { set } = userId.actions;

export default userId.reducer;
