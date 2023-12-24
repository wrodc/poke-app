import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (builder) => ({
    getList: builder.query({
      query: (page) => `pokemon?limit=10&offset=${page}`,
    }),
    getPokemon: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetListQuery, useLazyGetPokemonQuery } = pokemonApi;
