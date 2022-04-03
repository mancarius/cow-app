import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#E5E5E5",
        borderRadius: "15px",
      }}
    >
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 5 }}>
            <Typography variant="h6" mb={1} ml={2}>
              Dove?
            </Typography>
            <Paper
              component="form"
              sx={{
                paddingTop: "10px",
                paddingBottom: "10px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                borderRadius: "25px",
              }}
            >
              <SearchIcon
                sx={{ p: "10px", color: "#E5E5E5" }}
                aria-label="menu"
              />

              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Cerca nei dintorni..."
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: 4 }}>
            <Typography variant="h6" mb={1} ml={2}>
              Quando?
            </Typography>
            <Paper
              component="form"
              sx={{
                paddingTop: "10px",
                paddingBottom: "10px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                borderRadius: "25px",
              }}
            >
              <CalendarTodayIcon
                sx={{ p: "10px", color: "#E5E5E5" }}
                aria-label="menu"
              />

              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="es. Today" />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: 4 }}>
            <Typography variant="h6" mb={1} ml={2}>
              A che ora?
            </Typography>
            <Paper
              component="form"
              sx={{
                paddingTop: "10px",
                paddingBottom: "10px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                borderRadius: "25px",
              }}
            >
              <AccessTimeIcon
                sx={{ p: "10px", color: "#E5E5E5" }}
                aria-label="menu"
              />

              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="es. 15:30 - 16:30"
              />
            </Paper>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{
            mt: 8,
            mb: 8,
            bgcolor: "#FFC533",
            color: "black",
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "#ffc533e4",
              borderColor: "#ffc533e4",
            },
            "&:active": {
              boxShadow: "none",
              backgroundColor: "#ffc533e4",
              borderColor: "#ffc533e4",
            },
            "&:focus": {
              boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
            },
          }}
        >
          Cerca!
        </Button>
      </Box>
    </Container>
  );
}
