import * as React from "react";
import './HostCarouselFooter.css';
import { Box } from "@mui/material";

const HostCarouselFooter: React.FC = () => {
    
  return (
    

      <Box className="HostCarouselFooter">
          <span className="HostCarouselFooter_address"> Via dei Papaveri Alti 15, Torino, Italia </span>
          <Box className="HostCarouselFooter_features">
              <span>Free Wi-Fi</span>
              <span>cafè</span>
              <span>Close to underground</span>
          </Box>
      </Box>

  )
}

export default HostCarouselFooter;