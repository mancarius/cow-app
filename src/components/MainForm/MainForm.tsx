import { useState, FormEvent } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { serialize } from "../../utils/serialize";
import { Here } from "../../@types/Here";
import LocationSearchInput from "../LocationSearchInput/LocationSearchInput";
import DatePickerInput from "../DatePickerInput/DatePickerInput";
import TimePickerInput from "../TimePickerInput/TimePickerInput";

export default function SignUp() {
  const navigate = useNavigate();
  const [address, setAddress] = useState<Here.Item["address"]["city"]>("");
  const [dateInterval, setDateInterval] = useState<(Date | null)[]>([
    new Date(),
    null,
  ]);
  const [timeInterval, setTimeInterval] = useState<(string | null)[]>([
    new Date().toLocaleTimeString(),
    null,
  ]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data: Record<string, string> = {
      address,
      dateInterval: dateInterval
        .map((date) => (date ? date.toLocaleDateString() : ""))
        .join("-"),
    };
    navigate(`/results?${serialize(data)}`);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "15px",
        backgroundColor: "rgba( 241, 239, 239, 0.75)",
      }}
    >
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <Typography variant="h6" mb={1} ml={2}>
              Where?
            </Typography>
            <Paper
              component="div"
              sx={{
                padding: "5px 20px 5px 5px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                borderRadius: "25px",
              }}
            >
              <SearchIcon sx={{ fontSize: 50, p: "10px", color: "#E5E5E5" }} />
              <LocationSearchInput
                placeholder="Search nearby..."
                name="address"
                address={address}
                setAddress={setAddress}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="h6" mb={1} ml={2}>
              When?
            </Typography>
            <Paper
              component="div"
              sx={{
                padding: "10px 20px 10px 5px",
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
              <DatePickerInput
                name="dateInterval"
                value={dateInterval}
                setDateInterval={setDateInterval}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography variant="h6" mb={1} ml={2}>
              What time?
            </Typography>
            <Paper
              component="div"
              sx={{
                padding: "10px 20px 10px 15px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                borderRadius: "25px",
              }}
            >
              <TimePickerInput
                value={timeInterval}
                setTimeInterval={setTimeInterval}
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
            mt: 6,
            mb: 5,
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
