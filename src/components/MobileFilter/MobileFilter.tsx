import * as React from "react";
import './MobileFilter.css';
import { Box, Button, Stack } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MobileFilter: React.FC = () => {
    
  return (
    
      <Box className="MobileFilter">
        <Box className="MobileFilter_box1">
            <Box className="MobileFilter_box1_box">
                <Button className="box_button_back"> <ArrowBackIcon></ArrowBackIcon> </Button> 
                <h2>1 Result</h2>
            </Box>
            <Button className="box_button_map">View on map</Button>
        </Box>

        <Box className="MobileFilter_box2">
            <Box className="MobileFilter_box2_box">
                <Button>Torino</Button>
                <Button>Free-Wifi</Button>
            </Box>
            <Button className="box_button_filters">Filters</Button>
        </Box>
      </Box>

  )
}

export default MobileFilter;