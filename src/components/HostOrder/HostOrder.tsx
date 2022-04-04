import * as React from "react";
import './HostOrder.css';
import { Box, Stack, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const HostOrder: React.FC = () => {
    
  return (
    

      <Box className="HostOrder">
          <Box className="tavolo_condiviso">
              <img src="https://source.unsplash.com/random" alt="unsplash image" />
              <Stack>
                  <Typography variant="h5">Tavolo Condiviso</Typography>
                  <span><CheckIcon/> Multpresa </span>
                  <span><CheckIcon/> Caricabatterie wireless </span>
                  <span><CheckIcon/> Porta ethernet </span>
              </Stack>

              <Stack>
                  <span><p>Prezzo</p> <p>$10</p></span>
                  <span><p>Disponibilità</p> <p>2 Posti</p></span>
                  <span><p>Quantità</p> <p>0</p></span>
              </Stack>

          </Box>
      </Box>

  )
}

export default HostOrder;