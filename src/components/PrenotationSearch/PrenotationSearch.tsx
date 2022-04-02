import * as React from "react";
import './PrenotationSearch.css';
import { Box, Stack, TextField, Typography, Menu, MenuItem, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, FormGroup, Checkbox } from "@mui/material";


function PrenotationSearch() {
  return (
        <Stack className="prenotationSearch">
            <Typography variant="h4" className="ps_title">
                Strutture: 78
            </Typography>
            <Box className="ps_search_box" >
                <Stack>
                    <Typography variant="body1"> Dove? </Typography>
                    <span>
                        <input type="text" value="Torino" />
                    </span>
                </Stack>
                <Stack>
                    <Typography variant="body1"> Quando? </Typography>
                    <span>
                        <input type="text" value="7 Apr 2022" />
                    </span>
                </Stack>
                <Stack>
                    <Typography variant="body1"> A che ora? </Typography>
                    <span>
                        <input type="text" value="10:00 - 15:00" />
                    </span>
                </Stack>
            </Box>
            <Stack className="ps_filter">
                <Button variant="text">Filtri</Button>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Servizi Gratuiti" />
                        <FormControlLabel control={<Checkbox />} label="Area Relax" />
                        <FormControlLabel control={<Checkbox />} label="Vicinanza Stazione" />
                        <FormControlLabel control={<Checkbox />} label="Pet Frendly" />
                        <FormControlLabel control={<Checkbox />} label="Wi-Fi Gratuito" />
                        <FormControlLabel control={<Checkbox />} label="Locker" />
                        <FormControlLabel control={<Checkbox />} label="Sala Riunioni" />
                    </FormGroup>
            </Stack>
        </Stack>
       
  );
}

export default PrenotationSearch;