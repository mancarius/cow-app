import { Paper } from "@mui/material";
import React from "react";
import './HostCarouselItem.css';

const HostCarouselItem: React.FC<{ imageSrc: string }> = ({ imageSrc }) => {
  return (
    <Paper>
      <img className="carousel-item-image" src={imageSrc} />
    </Paper>
  );
};

export default HostCarouselItem;
