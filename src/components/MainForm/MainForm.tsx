import { ChangeEvent, useState, FormEvent } from "react";
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
import { useNavigate } from "react-router-dom";
import { serialize } from "../../utils/serialize";

export default function SignUp() {
  const navigate = useNavigate()
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      typeof value === "string" && (data[key] = value);
    });
    navigate(`/results?${serialize(data)}`);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#F1EFEF",
        borderRadius: "15px",
      }}
    >
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 5 }}>
            <Typography variant="h6" mb={1} ml={2}>
              Where?
            </Typography>
            <Paper
              component="div"
              sx={{
                paddingTop: "10px",
                paddingBottom: "10px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                borderRadius: "25px",
              }}
            >
              <SearchIcon sx={{ fontSize: 50, p: "10px", color: "#E5E5E5" }} />

              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search nearby..."
                name="address"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: 4 }}>
            <Typography variant="h6" mb={1} ml={2}>
              When?
            </Typography>
            <Paper
              component="div"
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
                sx={{ fontSize: 40, p: "10px", color: "#E5E5E5" }}
                aria-label="menu"
              />

              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="es. Today"
                name="dateInterval"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: 4 }}>
            <Typography variant="h6" mb={1} ml={2}>
              What time?
            </Typography>
            <Paper
              component="div"
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
                sx={{ fontSize: 40, p: "10px", color: "#E5E5E5" }}
                aria-label="menu"
              />

              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="15:30 - 16:30"
                name="timeInterval"
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
              boxShadow: "0 0 0 0.2rem rgb(255, 197, 51)",
            },
          }}
        >
          Find my place!
        </Button>
      </Box>
    </Container>
  );
}
