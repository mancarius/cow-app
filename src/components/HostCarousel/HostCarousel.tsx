import * as React from "react";
import "./HostCarousel.css";
import { Box } from "@mui/material";
import { Host } from "../../@types/Host";
import Carousel from "react-material-ui-carousel";
import HostCarouselItem from "./HostCarouselItem/HostCarouselItem";

const HostCarousel: React.FC<{
  hostId: string;
  images: Host.Info["images"];
}> = (props) => {
  const { hostId, images } = props;
  console.log([...images]);

  return (
    <Box className="HostCarousel">
      <Carousel>
        {images.map((image, i) => (
          <HostCarouselItem
            key={i}
            imageSrc={`/images/host/${hostId}/${image}`}
          ></HostCarouselItem>
        ))}
      </Carousel>
    </Box>
  );
};

export default HostCarousel;
