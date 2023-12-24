import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recent: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addRecent: (state, action) => {
      [...state, action.payload];
    },
    resetResent: (state) => {
      [];
    },
  },
});

export const { addRecent, resetResent } = pokemonSlice.actions;
export default pokemonSlice.reducer;
