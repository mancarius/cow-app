import * as React from "react";
import "./HostCarousel.css";
import { Box, Button } from "@mui/material";
import { Host } from "../../@types/Host";

const HostCarousel: React.FC<{images: Host.Info["images"]}> = (props) => {
  const { images } = props;
  console.log([...images]);

  return (
    <Box className="HostCarousel">
      <img className="fist_image" src={[...images].shift() ?? ''} alt="unsplash image" />
      <Box className="other_image">
        {[...images].slice(0,3)?.map((img, index) => (
          <img className={`image${index + 1}`} src={img} alt="unsplash image" />
        )) ?? []}
        <div className="last_image">
          <Button className="last_image_button">altre foto...</Button>
        </div>
      </Box>
    </Box>
  );
};

export default HostCarousel;
