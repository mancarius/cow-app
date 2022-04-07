import * as React from "react";
import { Container } from "@mui/material/";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Form from "../MainForm/MainForm";

const backgroundImage = "../../../assets/wave.svg";
const backgroundImage2 = "../../../assets/bg-image-hero.jpg";

export default function Hero() {
  return (
    <Box 
      sx={{
        backgroundImage: `url(${backgroundImage2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <Container maxWidth="xl">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
          >
            <Grid
              sx={{ bgcolor: "none" }}
              container
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={4} md={6}>
                <Typography variant="h2" mb={10} sx={{ fontWeight: "400", }}>
                  The perfect coworking space, only a click away
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "400" }}>
                  Find your place, wherever and whenever you want.
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "400" }}>
                  Are you in?
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={5}>
                <Form />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Typography>
    </Box>
    
  );
}
