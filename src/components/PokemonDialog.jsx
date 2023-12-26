import {
  Box,
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Divider,
  Stack,
  Chip,
} from "@mui/material";

const PokemonDialog = ({ handleClose, open, data }) => {
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        <Box sx={{ display: "flex", justifyContent: "left", gap: 1 }}>
          <Avatar sx={{ width: 30, height: 30 }}>
            {data?.name[0].toUpperCase()}
          </Avatar>
          {data?.name}
        </Box>
      </DialogTitle>
      <DialogContent>
        <img
          src={`https://img.pokemondb.net/artwork/large/${data.name}.jpg`}
          alt="Descripción de la imagen"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <Divider sx={{ my: 1 }} />
        <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 1 }}>
          <Typography>Abilities: </Typography>
          <Stack direction="row" spacing={1}>
            {data.abilities.map((ab) => {
              return (
                <Chip
                  label={ab.ability.name}
                  variant="outlined"
                  size="small"
                  color="primary"
                  key={ab.ability.name}
                />
              );
            })}
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default PokemonDialog;
