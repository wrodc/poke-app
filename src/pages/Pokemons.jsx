import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  CircularProgress,
} from "@mui/material";
import {
  useGetListQuery,
  useLazyGetPokemonQuery,
} from "../services/pokemonApi";
import { useEffect, useState } from "react";
import Pokemon from "./../components/Pokemon";
import Dividers from "../components/Dividers";
import PokemonDialog from "../components/PokemonDialog";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [infopoke, setInfopoke] = useState({});
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const { data, error, isFetching: fetchingList } = useGetListQuery(page);
  const [getPokemon] = useLazyGetPokemonQuery();

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpenDetail = (poke) => {
    setInfopoke(poke);
    setOpen(true);
  };

  useEffect(() => {
    setLoading(true);
    if (!fetchingList) {
      consultar();
    }
  }, [data, fetchingList]);

  const consultar = async () => {
    setLoading(true);
    const listado = data.results.map(async (pkm) => {
      return await getPokemon(pkm.name, true);
    });
    const result = await Promise.all(listado);
    const pkms = result.map((pk) => pk.data);
    setPokemons(pkms);
    setLoading(false);
  };

  const handleChangePage = (mov) => {
    if (mov === "next") setPage(page + 10);
    if (mov === "prev" && page >= 0) setPage(page - 10);
  };

  return (
    <>
      <Container>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <Stack direction="row" spacing={1}>
            <Button variant="outlined" onClick={() => handleChangePage("prev")}>
              {" "}
              prev{" "}
            </Button>
            <Button variant="outlined" onClick={() => handleChangePage("next")}>
              {" "}
              next{" "}
            </Button>
          </Stack>
        </Box>
        {error && <div>There was an error in transaction</div>}
        {loading && (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <CircularProgress />
          </Box>
        )}
        {pokemons && !loading ? (
          <Box sx={{ m: 2 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 8, md: 12 }}
            >
              {pokemons.map((pokemon) => (
                <Grid item xs={4} md={3} key={pokemon.name}>
                  <Pokemon info={pokemon} handleDetail={handleOpenDetail} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : null}
        {open && (
          <PokemonDialog
            handleClose={handleClose}
            open={open}
            data={infopoke}
          />
        )}
      </Container>
    </>
  );
};

export default Pokemons;
