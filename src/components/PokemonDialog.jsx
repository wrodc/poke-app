import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

const PokemonDialog = ({ handleClose, open, data }) => {
  console.log("CARGANDO DIALOG...");
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{data.name}</DialogTitle>
      <DialogContent>
        <Avatar>{data.name[0]}</Avatar>
        <Typography> name:{data.name}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default PokemonDialog;
