import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import ResultCard from "../ResultCard/ResultCard";

// Space Card changed with Result Card

const features = [
  {
    description: [
      "Lorem",
      "20 GB of storage",
      "Help center access",
      "Help center access",
      "Email support",
    ],
  },
  {
    description: [
      "Ipsum",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
  },
  {
    description: [
      "Dolor",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
  },
];

function CarouselContent() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      {/* Title */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Check this out:
          Your perfect coworking space is waiting to be found!
        </Typography>
      </Container>
      {/* End Title */}
      <Container maxWidth="xl" sx={{ pb: 6 }}>
        <Grid container spacing={12}>
          {features.map((feature) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ResultCard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function Carousel() {
  return <CarouselContent />;
}
