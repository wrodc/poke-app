import { Typography, Divider, Box, Chip, Stack } from "@mui/material";

const Dividers = () => {
  return (
    <>
      <Box sx={{ width: "400px", mx: "auto", my: 5 }}>
        <Typography variant="caption">Normal</Typography>
        <Divider />
        <Typography variant="caption">Inset</Typography>
        <Divider variant="inset" />
        <Typography variant="caption">Texto</Typography>
        <Divider textAlign="center">Center</Divider>
        <Divider textAlign="right">Right</Divider>
        <Divider textAlign="left">Left</Divider>
        <Typography variant="caption">Chip</Typography>
        <Divider>
          <Chip label="CHIP" />
        </Divider>
        <Typography variant="caption">Vertical</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <span>algo</span>
          <Divider orientation="vertical" flexItem />
          <span>otro</span>
        </Box>
      </Box>
    </>
  );
};

export default Dividers;
