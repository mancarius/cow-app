import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FolderIcon from "@mui/icons-material/Folder";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

const features = [
  {
    description: [
      "If you are a customer:",
      "1. Register with Facebook, Google or e-mail",
      "2. Go to the booking page and select your preferred day and time",
      "3. Choose from the available options and enjoy your stay!",
    ],
  },
  {
    description: [
      "If you want to list your property:",
      "1. Register with your company e-mail, Google or e-mail",
      "2. Enter the information about your coworking space",
      "3. Get ready to offer an unforgettable stay to your guests!",
    ],
  },
];

function FeatureContent() {
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
          How it works?
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
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                style={{
                  width: "200px",
                  height: "200px",
                }}
              >
                <FolderIcon />
              </Avatar>
              <Typography
                mt={5}
                component="h5"
                variant="h5"
                align="center"
                color="text.primary"
                gutterBottom
              >
                {feature.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function Feature() {
  return <FeatureContent />;
}
