import { createSlice } from "@reduxjs/toolkit";

export const userId = createSlice({
  name: "setUser",
  initialState: { id: 1, name: "Ivo Ivić", type: "Student" },
  reducers: {
    set: (state, action) => {
      const { id, name, type, subjects, courses } = action.payload;
      state.id = id;
      state.name = name;
      state.type = type;
      state.subjects = subjects;
      state.courses = courses;
    },
  },
});

export const { set } = userId.actions;

export default userId.reducer;
