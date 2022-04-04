import * as React from "react";
import { Container } from "@mui/material/";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Form from "../MainForm/MainForm";

const backgroundImage = "../../../assets/wave.svg";

import { useTranslation } from "react-i18next"; 
import i18next from "i18next";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

export default function Hero() {

  const { i18n, t } = useTranslation(["hero"]) //path hero nella dir locales\i18n

  React.useEffect(() => {
    if (localStorage.getItem("i18nextLng")!.length > 2) {
      i18next.changeLanguage("en")
    }
  }, [])

  const handleLanguageChange = (event: any) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
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
              <Typography variant="h2" mb={10} sx={{ fontWeight: "400" }}>
                Coworking quando vuoi
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "400" }}>
                {t("payoff")}
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={localStorage.getItem("i18nextLng")}
                  label="Language"
                  onChange={handleLanguageChange}
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="it">Italiano</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4} md={5}>
              <Form />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Typography>
  );
}
