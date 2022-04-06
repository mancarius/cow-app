import * as React from "react";
import './HostCart.css';
import { Box, Button, Stack } from "@mui/material";

const HostCart: React.FC = () => {
    
  return (
    

      <Box className="HostCart">
        <h3>Summary</h3>
        <Stack className="HostCart_stack">
          <p>1 x Shared table</p>
        </Stack>
        <p className="HostCart_total">€10</p>
        <Button>Book now</Button>
      </Box>

  )
}

export default HostCart;