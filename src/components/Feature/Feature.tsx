import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import howItWorksFor_image from "../../assets/how-it-works-customers.png";
import howItWorksHost_image from "../../assets/how-it-works-host.png";

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
      <Container maxWidth="md" sx={{ pb: 6 }}>
        <Grid container spacing={12}>
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
            <Box
              component="img"
              sx={{
                height: 233,
                maxHeight: { xs: 233, md: 167 },
              }}
              alt="How it works for."
              src={howItWorksFor_image}
            />
            <Typography
              mt={4}
              component="h5"
              variant="h5"
              align="left"
              color="text.primary"
              gutterBottom
            >
              If you are a customer:
            </Typography>
            <Typography
              mt={3}
              component="p"
              variant="body1"
              align="left"
              color="text.primary"
              gutterBottom
            >
              <strong>1</strong>. Sign-in quickly with your Facebook or Google
              account
            </Typography>
            <Typography
              mt={3}
              component="p"
              variant="body1"
              align="left"
              color="text.primary"
              gutterBottom
            >
              <strong>2</strong>. Select your preferred day and time
            </Typography>
            <Typography
              mt={3}
              component="p"
              variant="body1"
              align="left"
              color="text.primary"
              gutterBottom
            >
              <strong>3</strong>. Choose from the available options and enjoy
              your stay!
            </Typography>
          </Grid>

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
            <Box
              component="img"
              sx={{
                height: 233,
                maxHeight: { xs: 233, md: 167 },
              }}
              alt="How it works for."
              src={howItWorksHost_image}
            />
            <Typography
              mt={4}
              component="h5"
              variant="h5"
              align="left"
              color="text.primary"
              gutterBottom
            >
              If you want to list your property:
            </Typography>
            <Typography
              mt={3}
              component="p"
              variant="body1"
              align="left"
              color="text.primary"
              gutterBottom
            >
              <strong>1</strong>. Sign-in quickly with your Facebook or Google
              account
            </Typography>
            <Typography
              mt={3}
              component="p"
              variant="body1"
              align="left"
              color="text.primary"
              gutterBottom
            >
              <strong>2</strong>. Enter the information about your coworking
              space
            </Typography>
            <Typography
              mt={3}
              component="p"
              variant="body1"
              align="left"
              color="text.primary"
              gutterBottom
            >
              <strong>3</strong>. Get ready to offer an unforgettable stay to
              your guests!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function Feature() {
  return <FeatureContent />;
}
