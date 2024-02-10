import { createSlice } from "@reduxjs/toolkit";

export const userId = createSlice({
  name: "setUser",
  initialState: { id: null, ime: null },
  reducers: {
    set: (state, action) => {
      const { id, name, type, predmeti, dolasci } = action.payload;
      state.id = id;
      state.name = name;
      state.type = type;
      state.predmeti = predmeti;
      state.dolasci = dolasci;
    },
  },
});

export const { set } = userId.actions;

export default userId.reducer;
