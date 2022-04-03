import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "25ch",
      backgroundColor: "white",
      border: "1px solid #A1E8E3",
      borderRadius: "30px",
    },
  },
}));

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://mui.com/">
        iPee(rs)
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "none",
  mr: 1,
  mt: 2,
};

const LANGUAGES = [
  {
    code: "it-IT",
    name: "Italiano",
  },
  {
    code: "en-US",
    name: "English",
  },
];

export default function Footer() {
  const classes = useStyles();

  return (
    <Typography
      component="footer"
      sx={{
        display: "flex",
        bgcolor: "#A1E8E3",
        borderRadius: "30px 30px 0px 0px",
      }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5} justifyContent="space-between">
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: "flex" }}>
                <Box
                  component="img"
                  sx={{
                    width: 120,
                  }}
                  alt="Your logo."
                  src="https://cdn.discordapp.com/attachments/957585239364993025/959751983261163530/Untitled_Artwork_92.png"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              sx={{ color: "black" }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Contatti
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link sx={{ color: "black" }} href="https://mui.com/">
                  Contatto1
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link sx={{ color: "black" }} href="https://mui.com/">
                  Contatto2
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography
              sx={{ color: "black" }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Link
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link sx={{ color: "black" }} href="https://mui.com/">
                  Link1
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link sx={{ color: "black" }} href="https://mui.com/">
                  Link2
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link sx={{ color: "black" }} href="https://mui.com/">
                  Link3
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link sx={{ color: "black" }} href="https://mui.com/">
                  Link4
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link sx={{ color: "black" }} href="https://mui.com/">
                  Link5
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link sx={{ color: "black" }} href="https://mui.com/">
                  Link6
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography
              sx={{ color: "black" }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Language
            </Typography>
            <TextField
              className={classes.root}
              select
              size="medium"
              variant="outlined"
              SelectProps={{
                native: true,
              }}
              sx={{
                mt: 1,
                width: "27ch",
              }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>

            <Grid item sx={{ display: "flex" }}>
              <Box component="a" href="https://facebook.com/" sx={iconStyle}>
                <FacebookIcon sx={{ color: "black", fontSize: 30 }} />
              </Box>
              <Box component="a" href="https://instagram.com/" sx={iconStyle}>
                <InstagramIcon sx={{ color: "black", fontSize: 30 }} />
              </Box>
              <Box component="a" href="https://youtube.com/" sx={iconStyle}>
                <YouTubeIcon sx={{ color: "black", fontSize: 30 }} />
              </Box>
              <Box component="a" href="https://youtube.com/" sx={iconStyle}>
                <YouTubeIcon sx={{ color: "black", fontSize: 30 }} />
              </Box>
            </Grid>
          </Grid>

          <Grid item>
            <Typography variant="caption" sx={{ color: "black" }}>
              {"Logo made by "}
              <Link
                href="https://www.freepik.com"
                rel="sponsored"
                title="iPee(rs)"
                sx={{ color: "black" }}
              >
                iPee(rs)
              </Link>
              {" from "}
              <Link
                href="https://www.flaticon.com"
                rel="sponsored"
                title="iPee(rs)"
                sx={{ color: "black" }}
              >
                www.ipeers.com
              </Link>
              {" is licensed by "}
              <Link
                href="https://mui.com/"
                title="MUI"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "black" }}
              >
                NOONECARES
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
