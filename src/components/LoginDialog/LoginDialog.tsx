import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Divider } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import { RootState, useAppDispatch } from '../../store';
import { AuthProvider } from "../../@types/AuthProvider.d";
import { customerLogin, dismissAuth } from "../../store/features/customer/slice";
import { useSelector } from "react-redux";

export default function SignIn() {
  // Dialog
  const { requireAuth: open } = useSelector((state:RootState) => state.customer);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(dismissAuth());
  };

  const signInWith = async (provider: AuthProvider) => {
    const resultAction = await dispatch(customerLogin(provider));
    if (customerLogin.fulfilled.match(resultAction)) {
      handleClose()
    } else {
      alert("Sign In failed");
    }
  }

  // Form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <Dialog
      PaperProps={{
        style: { borderRadius: 30 },
      }}
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <Grid container spacing={0.5}>
          <Grid item xs={4} sm={4} sx={{ mt: 1 }}>
            <IconButton
              aria-label="close"
              component="span"
              sx={{ color: "black" }}
              onClick={handleClose}
            >
              <CloseOutlinedIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
            <Typography variant="h6" mb={3} ml={2}>
              Login or Sign up
            </Typography>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid width={"100%"} sx={{ mt: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: "500" }} mb={0.5} ml={2}>
            Welcome on board!
            <Box
              component="img"
              sx={{
                height: 25,
                marginLeft: 1,
              }}
              alt="Your logo."
              src="../../../assets/logo-small.png"
            />
          </Typography>
        </Grid>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            //bgcolor: "#E5E5E5",
            borderRadius: "15px",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 2, mb: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ mt: 0.5 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "500" }}
                  mb={1}
                >
                  Your E-mail
                </Typography>
                <Paper
                  elevation={0}
                  component="form"
                  sx={{
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    borderRadius: "25px",
                    border: "1px solid black",
                  }}
                >
                  <InputBase sx={{ ml: 3, flex: 1 }} placeholder="E-mail" />
                  <AlternateEmailOutlinedIcon
                    sx={{ p: "10px", fontSize: 40 }}
                    aria-label="menu"
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sx={{ mt: 0.5 }}>
                <Typography
                  variant="subtitle1"
                  mb={1}
                  sx={{ fontWeight: "500" }}
                >
                  Your Password
                </Typography>
                <Paper
                  elevation={0}
                  component="form"
                  sx={{
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    borderRadius: "25px",
                    border: "1px solid black",
                  }}
                >
                  <InputBase sx={{ ml: 3, flex: 1 }} placeholder="Password" />
                  <VisibilityOutlinedIcon
                    sx={{ p: "10px", fontSize: 40 }}
                    aria-label="menu"
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 1,
                    mb: 1,
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
                  I'm in
                </Button>
              </Grid>

              <Grid width={"100%"} sx={{ mt: 2 }}>
                <Typography variant="subtitle2" mb={2} ml={2}>
                  <Divider>oppure</Divider>
                </Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              onClick={() => signInWith(AuthProvider.google)}
              startIcon={
                <SvgIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 326667 333333"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                      fill="#4285f4"
                    />
                    <path
                      d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                      fill="#34a853"
                    />
                    <path
                      d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                      fill="#ea4335"
                    />
                  </svg>
                </SvgIcon>
              }
              sx={{
                mt: 1,
                mb: 1,
                bgcolor: "white",
                color: "black",
                border: "1px solid black",
                textTransform: "none",
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
              Login with Google
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              onClick={() => signInWith(AuthProvider.facebook)}
              startIcon={
                <SvgIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 506.86 506.86"
                  >
                    <path
                      d="M506.86,253.43C506.86,113.46,393.39,0,253.43,0S0,113.46,0,253.43C0,379.92,92.68,484.77,213.83,503.78V326.69H149.48V253.43h64.35V197.6c0-63.52,37.84-98.6,95.72-98.6,27.73,0,56.73,5,56.73,5v62.36H334.33c-31.49,0-41.3,19.54-41.3,39.58v47.54h70.28l-11.23,73.26H293V503.78C414.18,484.77,506.86,379.92,506.86,253.43Z"
                      fill="#1877f2"
                    />
                    <path
                      d="M352.08,326.69l11.23-73.26H293V205.89c0-20,9.81-39.58,41.3-39.58h31.95V104s-29-5-56.73-5c-57.88,0-95.72,35.08-95.72,98.6v55.83H149.48v73.26h64.35V503.78a256.11,256.11,0,0,0,79.2,0V326.69Z"
                      fill="#fff"
                    />
                  </svg>
                </SvgIcon>
              }
              sx={{
                mt: 1,
                mb: 1,
                bgcolor: "white",
                color: "black",
                border: "1px solid black",
                textTransform: "none",
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
                  boxShadow: "0 0 0 0.2rem rgb(255, 197, 51))",
                },
              }}
            >
              Login with Facebook
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              startIcon={<EmailOutlinedIcon />}
              sx={{
                mt: 1,
                mb: 1,
                bgcolor: "white",
                color: "black",
                border: "1px solid black",
                textTransform: "none",
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
              Sign up with e-mail
            </Button>
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  );
}
