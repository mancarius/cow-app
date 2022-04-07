import * as React from "react";
import "./HostCarousel.css";
import { Box, Button, ImageList, ImageListItem } from "@mui/material";
import { Host } from "../../@types/Host";

const image = "../../../assets/coworking.jpg";
const coworking1 = "../../../assets/coworking1.jpg";
const coworking2 = "../../../assets/coworking2.jpg";
const coworking3 = "../../../assets/coworking3.jpg";
const coworking4 = "../../../assets/coworking4.jpg";
const coworking5 = "../../../assets/coworking5.jpg";

const HostCarousel: React.FC<{images: Host.Info["images"]}> = (props) => {
  const { images } = props;

  return (
    <Box className="HostCarousel">
      <img
        className="fist_image"
        src={coworking1}
        alt="unsplash image"
      />
      <Box className="other_image">
        <img
          className="image1"
          src={coworking2}
          alt="unsplash image"
        />
        <img
          className="image2"
          src={coworking3}
          alt="unsplash image"
        />
        <img
          className="image3"
          src={coworking5}
          alt="unsplash image"
        />
        <div className="last_image">
          <Button className="last_image_button">altre foto...</Button>
          <img src={coworking4} alt="unsplash image" />
        </div>
      </Box>
    </Box>
  );
};

export default HostCarousel;
