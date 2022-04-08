import * as React from "react";
import { Container } from "@mui/material/";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Form from "../MainForm/MainForm";
import "./Hero.css";
import backgroundImage from "../../assets/bg-image-hero.jpg";
import waveImage from "../../assets/wave.svg";

export default function Hero() {
  return (
    <Box
      sx={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0) 15%,rgba(0,0,0,0.35) 100%), url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          height: "90vh",
          backgroundImage: `url(${waveImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 2rem",
        }}
      >
        <Container maxWidth="xl">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Grid
              sx={{ bgcolor: "none" }}
              container
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                sm={4}
                md={6}
                sx={{
                  textShadow:
                    "1px 1px black, -1px -1px black, -1px 1px black, 1px -1px black",
                }}
              >
                <Typography
                  variant="h2"
                  mb={10}
                  sx={{ fontWeight: "500", color: "white" }}
                >
                  The perfect coworking space, only a click away
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "500", color: "white" }}
                >
                  Find your place, wherever and whenever you want.
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "500", color: "white" }}
                >
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
