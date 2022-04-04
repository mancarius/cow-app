import * as React from "react";
import './HostOrder.css';
import { Box, FormControl, FormHelperText, MenuItem, Stack, Typography } from "@mui/material";
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
                        <div className="HostOrder_info_div"><h4>Prezzo</h4> <span> <h3>€10</h3> </span></div>
                        <div className="HostOrder_info_div"><h4>Disponibilità</h4> <span > <h4>2/10</h4> </span> </div>
                        <div className="HostOrder_info_div"><h4>Quantità</h4> <span className="quantity_span"> 
                            <select className="quantity" name="quantity" id="quantity">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </span></div>
                    </Stack>
                </Box>
          </Box>

          <hr className="separator" />

          <Box className="HostOrder_container">
                <Box className="HostOrder_desc_box">
                    <img src="https://source.unsplash.com/random" alt="unsplash image" />
                    <Stack className="HostOrder_desc">
                        <Typography variant="h5">Scrivania singola</Typography>
                        <span><CheckIcon/> <p>Multpresa</p> </span>
                        <span><CheckIcon/> <p>Caricabatterie wireless</p> </span>
                        <span><CheckIcon/> <p>Porta ethernet</p> </span>
                        <span><CheckIcon/> <p>Monitor Esterno 27"</p> </span>
                        <span><CheckIcon/> <p>Cassettiera con lock</p> </span>
                    </Stack>
                </Box>
              
                <Box className="HostOrder_info_box">
                    <Stack className="HostOrder_info">
                        <div className="HostOrder_info_div"><h4>Prezzo</h4> <span> <h3>€15</h3> </span></div>
                        <div className="HostOrder_info_div"><h4>Disponibilità</h4> <span > <h4>3/10</h4> </span> </div>
                        <div className="HostOrder_info_div"><h4>Quantità</h4> <span className="quantity_span"> 
                            <select className="quantity" name="quantity" id="quantity">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </span></div>
                    </Stack>
                </Box>
          </Box>

          <hr className="separator" />

          <Box className="HostOrder_container">
                <Box className="HostOrder_desc_box">
                    <img src="https://source.unsplash.com/random" alt="unsplash image" />
                    <Stack className="HostOrder_desc">
                        <Typography variant="h5">Sala riunioni</Typography>
                        <span><CheckIcon/> <p>Multpresa</p> </span>
                        <span><CheckIcon/> <p>Caricabatterie wireless</p> </span>
                        <span><CheckIcon/> <p>Porta ethernet</p> </span>
                        <span><CheckIcon/> <p>Proiettore</p> </span>
                        <span><CheckIcon/> <p>Clima regolabile</p> </span>
                    </Stack>
                </Box>
              
                <Box className="HostOrder_info_box">
                    <Stack className="HostOrder_info">
                        <div className="HostOrder_info_div"><h4>Prezzo</h4> <span> <h3>€10</h3> </span></div>
                        <div className="HostOrder_info_div"><h4>Disponibilità</h4> <span > <h4>2/10</h4> </span> </div>
                        <div className="HostOrder_info_div"><h4>Quantità</h4> <span className="quantity_span"> 
                            <select className="quantity" name="quantity" id="quantity">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </span></div>
                    </Stack>
                </Box>
          </Box>
      </Box>

  )
}

export default HostOrder;