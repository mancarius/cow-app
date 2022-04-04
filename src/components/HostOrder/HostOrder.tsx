import * as React from "react";
import './HostOrder.css';
import { Box, Stack, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const HostOrder: React.FC = () => {
    
  return (
    

      <Box className="HostOrder">
          <Box className="HostOrder_container">
                <Box className="HostOrder_desc_box">
                    <img src="https://source.unsplash.com/random" alt="unsplash image" />
                    <Stack className="HostOrder_desc">
                        <Typography variant="h5">Tavolo Condiviso</Typography>
                        <span><CheckIcon/> <p>Multpresa</p> </span>
                        <span><CheckIcon/> <p>Caricabatterie wireless</p> </span>
                        <span><CheckIcon/> <p>Porta ethernet</p> </span>
                    </Stack>
                </Box>
              
                <Box className="HostOrder_info_box">
                    <Stack className="HostOrder_info">
                        <div><p>Prezzo</p> <span> <p>€10</p> </span></div>
                        <div><p>Disponibilità</p> <span > <p>2/10</p> </span> </div>
                        <div><p>Quantità</p> <span> <p>0</p> </span></div>
                    </Stack>
                </Box>

          </Box>
      </Box>

  )
}

export default HostOrder;