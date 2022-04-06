import * as React from "react";
import './HostDetails.css';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import HostCarousel from "../../components/HostCarousel/HostCarousel";
import HostOrder from "../../components/HostOrder/HostOrder";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HostDetails: React.FC = () => {
    
  return (
    <React.Fragment>
      <Box className="HostDetails">
        <Stack direction="row">
          <Button><ArrowBackIcon/></Button>
          <Typography variant="h4">Mind Lounge</Typography>
        </Stack>
        <HostCarousel></HostCarousel>
        <HostOrder></HostOrder>

      </Box>
    </React.Fragment>

  )
}

export default HostDetails;