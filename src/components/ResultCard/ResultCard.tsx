import * as React from "react";
import './ResultCard.css';

import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia, Stack } from "@mui/material";

function ResultCard() {
  return (
        <Box className="myCardBox" width="310px" >
            <Card className="myCard">
                <CardMedia component="img" height="220px" image="https://source.unsplash.com/random" alt="unsplash image"></CardMedia>
                <CardContent className="myCard_content">
                    <Typography gutterBottom variant="h5">
                        Mind Lounge
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        Via dei papaveri alti, 15
                    </Typography>
                </CardContent>
                <Box className="mc_actions">
                    <Box className="mc_reviews">
                        <span className="mc_reviews_vote">8.7</span>
                        <Stack className="mc_reviews_desc">
                            <h6>Ottimo!</h6>
                            <p>Su 90 recensioni</p>
                        </Stack>
                    </Box>

                    <CardActions className="mc_actions_button">
                        <Button size="small">View</Button>
                    </CardActions>
                </Box>
            </Card>
        </Box>
  );
}

export default ResultCard;