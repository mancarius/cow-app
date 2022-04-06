import * as React from "react";
import './HostDate.css';
import { Box, Stack } from "@mui/material";

const HostDate: React.FC = () => {
    
  return (
    

      <Box className="HostDate">
        <h3>Availability</h3>
        <Box className="HostDate_box">
            <Stack className="HostDate_stack">
                <p>When?</p>
                <span>
                    <input type="text" value="7 Apr 2021" />
                </span>
            </Stack>

            <Stack className="HostDate_stack">
                <p>What time?</p>
                <span>
                    <input type="text" value="09:00 - 18:00" />
                </span>
            </Stack>
        </Box>
      </Box>

  )
}

export default HostDate;