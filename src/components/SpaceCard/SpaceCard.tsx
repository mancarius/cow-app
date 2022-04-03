import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function SpaceCard() {
  return (
    <Card sx={{ minWidth: 380, borderRadius: "15px" }}>
      <CardMedia
        component="img"
        height="220"
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        alt="Coworking space"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mind Lounge
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Via dei Papaveri Alti, 15
        </Typography>
      </CardContent>
      <CardContent>
        <Grid justifyContent="space-between">
          <Grid item xs={3} sm={6} md={12}>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li">
                <Typography variant="body2" color="text.primary">
                  Ottimo!
                </Typography>
              </Box>
              <Box component="li">
                <Typography variant="body2" color="text.secondary">
                  Su 90 recensioni
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
