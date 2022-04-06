import * as React from "react";
import { useParams } from 'react-router-dom'
import HostService from '../../service/host.service'

import './HostDetails.css';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import HostCarousel from "../../components/HostCarousel/HostCarousel";
import HostOrder from "../../components/HostOrder/HostOrder";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const HostDetails: React.FC = () => {

  const { id } = useParams()

  React.useEffect(() => {
    if(id) {
      HostService.findById(id).then((response) => {
        const resultSingleHost = response
        console.log(resultSingleHost) 
        return resultSingleHost
      }
      ).catch((error) => {
        console.log(error)
      }) 
    }
  }, [id])

//  const { 
//    adress, 
//    contact, 
//    description,  
//    images, 
//    openingDays, 
//    spaces, 
//    tags 
//   } = resultSingleHost
    
  return (
    <React.Fragment>
      <NavBar></NavBar>

      <Box className="HostDetails">
        <Stack direction="row">
          <Button><ArrowBackIcon/></Button>
          <Typography variant="h4">Mind Lounge</Typography>
        </Stack>
        <HostCarousel></HostCarousel>
        <HostOrder></HostOrder>

      </Box>

      <Footer></Footer>
    </React.Fragment>

  )
}

export default HostDetails;