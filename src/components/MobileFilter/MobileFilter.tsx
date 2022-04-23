import * as React from "react";
import './MobileFilter.css';
import { Box, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MobileFilter: React.FC = () => {
    
  return (
    
      <Box className="MobileFilter">
        
        <Box className="MobileFilter_box">
            <Button className="box_button_back"> <ArrowBackIcon></ArrowBackIcon> </Button> 
            <h2>1 Result</h2>
        </Box>
        <Button className="box_button_map">Filters</Button>
        
      </Box>

  )
}

export default MobileFilter;