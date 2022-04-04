import * as React from "react";
import './HostCarousel.css';
import { Box, Button, ImageList, ImageListItem } from "@mui/material";

const HostCarousel: React.FC = () => {
    
  return (
    

      <Box className="HostCarousel">
        <img className="fist_image" src="https://source.unsplash.com/random" alt="unsplash image" />
        <Box className="other_image">
            <img className="image1" src="https://source.unsplash.com/random" alt="unsplash image" />
            <img className="image2" src="https://source.unsplash.com/random" alt="unsplash image" />
            <img className="image3" src="https://source.unsplash.com/random" alt="unsplash image" />
            <div className="last_image">
                <Button className="last_image_button">altre foto...</Button>
                <img src="https://source.unsplash.com/random" alt="unsplash image" />
            </div>
        </Box>
      </Box>

  )
}

export default HostCarousel