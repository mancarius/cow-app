import * as React from "react";
import "./HostCarousel.css";
import { Box, Button } from "@mui/material";
import { Host } from "../../@types/Host";
import image1 from "../../assets/coworking1.jpg";
import image2 from "../../assets/coworking2.jpg";
import image3 from "../../assets/coworking3.jpg";
import image4 from "../../assets/coworking4.jpg";
import image5 from "../../assets/coworking5.jpg";

const HostCarousel: React.FC<{images: Host.Info["images"]}> = (props) => {
  const { images } = props;
  console.log([...images]);

  return (
    <Box className="HostCarousel">
      {/*<img className="fist_image" src={[...images].shift() ?? ''} alt="unsplash image" />
      <Box className="other_image">
        {[...images].slice(0,3)?.map((img, index) => (
          <img className={`image${index + 1}`} src={img} alt="unsplash image" />
        )) ?? []}
        <div className="last_image">
          <Button className="last_image_button">altre foto...</Button>
        </div>
      </Box>*/}

      <img className="fist_image" src={image1} alt="unsplash image" />
      <Box className="other_image">
        <img className="" src={image2} alt="unsplash image" />
        <img className="" src={image3} alt="unsplash image" />
        <img className="image3" src={image5} alt="unsplash image" />
        
        <div className="last_image">
          <Button className="last_image_button">altre foto...</Button>
          <img className="" src={image4} alt="unsplash image" />
        </div>
      </Box>

    </Box>
  );
};

export default HostCarousel;
