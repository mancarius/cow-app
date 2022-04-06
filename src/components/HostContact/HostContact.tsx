import * as React from "react";
import './HostContact.css';
import { Box, Button, Stack } from "@mui/material";

const HostContact: React.FC = () => {
    
  return (
    

      <Box className="HostContact">
        <h2>Locations Contact</h2>
        <Box className="HostContact_box">
            <p>info@mindlounge.com</p>
            <p>+00 1234567890</p>
        </Box>
      </Box>

  )
}

export default HostContact;