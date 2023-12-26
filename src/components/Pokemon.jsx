import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

const Pokemon = ({ info, handleDetail }) => {
  return (
    <Card sx={{ minWidth: "150px", maxWidth: "180px", height: "400px", my: 1 }}>
      <CardHeader title={info.name} />
      <CardMedia
        component="img"
        image={info.sprites.front_default}
        height="150px"
        title={info.name}
      />
      <CardContent>
        <Divider />
        <Typography variant="h6">{info.name}</Typography>
        <ul>
          <li>Height:{info.height}</li>
          <li>Weight:{info.weight}</li>
        </ul>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          onClick={() => handleDetail(info)}
        >
          Mas...
        </Button>
      </CardActions>
    </Card>
  );
};

export default Pokemon;
