import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../services/pokemonSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi } from "../services/pokemonApi";

export const store = configureStore({
  reducer: {
    pokemonStore: pokemonReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);
