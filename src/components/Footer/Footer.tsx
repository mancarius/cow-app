import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
//import TextField from "@mui/material/TextField";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import InstagramIcon from "@mui/icons-material/Instagram";


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
  mt: 1,
};

// const LANGUAGES = [
//   {
//     code: "it-IT",
//     name: "Italiano",
//   },
//   {
//     code: "en-US",
//     name: "English",
//   },
// ];

export default function Footer() {
  const classes = useStyles();

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        bgcolor: "#A1E8E3",
        borderRadius: "30px 30px 0px 0px",
        
      }}
    >
      <Container 
        sx={{ 
          my: 8, 
          mb: 0, 
          display: "flex",
          flexDirection: { xs: "column", sm: "row"}
        }} disableGutters={true}>
        <Grid container spacing={0} justifyContent="space-around">
          <Grid item xs={12} sm={4} md={2} sx={{marginX: { xs: 6, sm: 0 }}}>
            <Grid
              container
              direction="column"
              spacing={2}
              sx={{ 
                height: { xs: 200, sm: 120 },
                justifyContent: {xs: "flex-start", sm: "flex-end"} 
              }}
            >
              <Grid item sx={{ display: "flex" }}>
                <Box
                  component="img"
                  sx={{
                    width: 120,
                  }}
                  alt="Your logo."
                  src="../../../assets/logo-small.png"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={2} sx={{ 
            marginX: { xs: 6, sm: 0 },
            marginBottom: 10, 
          }}
            >
            <Typography
              sx={{ color: "black" }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Contacts
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Typography sx={{ color: "black" }}>
                  made with <FavoriteBorderOutlinedIcon sx={{ color: "white", fontSize: 15 }}/> by iPee(rs) team.
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/*<Grid item xs={6} sm={4} md={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography
              sx={{ color: "black" }}
              variant="h6"
              gutterBottom
              component="div"
            >
              Social
            </Typography>
             <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link sx={{ color: "black" }} href="https://mui.com/">
                  About
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link sx={{ color: "black" }} href="https://mui.com/">
                  Support
                </Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link sx={{ color: "black" }} href="https://mui.com/">
                  About
                </Link>
              </Box> 
            </Box>
          </Grid>*/}
          <Grid item xs={12} sm={12} md={2} sx={{ marginX: { xs: 12, sm: 0 } }}>
            <Typography
              sx={{ color: "black" }}
              variant="h6"
              component="div"
            >
              Social
            </Typography>
             {/* <TextField
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
            </TextField>  */}
            <Grid item sx={{ display: "flex" }}>
              <Box component="a" href="https://facebook.com/" sx={iconStyle}>
                <FacebookTwoToneIcon sx={{ color: "black", fontSize: 30 }} />
              </Box>
              <Box component="a" href="https://instagram.com/" sx={iconStyle}>
                <InstagramIcon sx={{ color: "black", fontSize: 30 }} />
              </Box>
              <Box component="a" href="https://twitter.com/" sx={iconStyle}>
                <TwitterIcon sx={{ color: "black", fontSize: 30 }} />
              </Box>
              <Box component="a" href="https://linkedin.com/" sx={iconStyle}>
                <LinkedInIcon sx={{ color: "black", fontSize: 30 }} />
              </Box>
            </Grid>
          </Grid>
          <Grid xs={12} item sx={{ bgcolor: "#5CC0BA", mt: 10 }}>
            <Box 
              display="flex" 
              alignItems="center"
              justifyContent="flex-start"
              paddingY="25px"
              sx={{ marginLeft: 5 }}
            >
              <Typography variant="caption" sx={{ color: "black"}}>
                  © 2022
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
