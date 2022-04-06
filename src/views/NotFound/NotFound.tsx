import { Box, Button, Container, Grid, Typography } from '@mui/material'

const backgroundImage = "../../../assets/404.png";

const NotFound: React.FC = () => {
    
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
                Whoops!
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: "400" }}>
                The page you are looking for does not exist.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "400" }}>
                I'm feeling moo-dy today, sorry.
              </Typography>
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
                  Take me back
                </Button>
            </Grid>

            <Grid item xs={12} sm={4} md={5}>
              
            </Grid>

          </Grid>
        </Box>
      </Container>
    </Typography>
  
  )
}

export default NotFound