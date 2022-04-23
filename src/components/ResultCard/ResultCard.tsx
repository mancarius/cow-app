import * as React from "react";
import "./ResultCard.css";

import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Stack,
} from "@mui/material";
import { Host } from "../../@types/Host";
import { useNavigate } from "react-router-dom";

function getRandomNumberBetween(min: number, max: number) {
  return Math.random() * (max - min + 1) + min;
}

const ResultCard: React.FC<{ host: Host.SearchResult }> = React.memo(({ host }) => {
    const navigate = useNavigate();
  const valutation = {
    score: parseFloat(getRandomNumberBetween(6, 9).toFixed(1)),
    label: "Decent",
    feedbacks: Math.round(getRandomNumberBetween(20, 100)),
  };

  if (valutation.score > 9.5) {
    valutation.label = "Excellent";
  } else if (valutation.score > 8.5) {
    valutation.label = "Great";
  } else if (valutation.score > 7.5) {
    valutation.label = "Good";
  }

  return (
    <Box className="myCardBox">
      <Card className="myCard">
        <CardMedia
          component="img"
          className="myCardMedia"
          image={'/images/host/'+host.id+'/'+host.images[0]}
          alt="unsplash image"
        ></CardMedia>
        <Stack className="myCardBox_content">
          <CardContent className="myCard_content">
            <Typography gutterBottom variant="h5">
              {host.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {host.address.street + " " + host.address.houseNumber}
            </Typography>
          </CardContent>
          <Box className="mc_actions">
            <Box className="mc_reviews">
              <span className="mc_reviews_vote">{valutation.score}</span>
              <Stack className="mc_reviews_desc">
                <h6>{valutation.label}</h6>
                <p>Su {valutation.feedbacks} recensioni</p>
              </Stack>
            </Box>

            <CardActions className="mc_actions_button">
              <Button size="small" onClick={(e) => navigate(`/host-details/${host.id}`)}>View</Button>
            </CardActions>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
});

export default ResultCard;
