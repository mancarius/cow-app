import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import HostService from "../../service/host.service";

import "./HostDetails.css";
import HostCarousel from "../../components/HostCarousel/HostCarousel";
import HostOrder from "../../components/HostOrder/HostOrder";
import HostCarouselFooter from "../../components/HostCarouselFooter/HostCarouselFooter";
import HostDate from "../../components/HostDate/HostDate";
import HostCart from "../../components/HostCart/HostCart";
import HostContact from "../../components/HostContact/HostContact";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const HostDetails: React.FC = () => {
  const [host, setHost] = useState<HostService | null>(null);
  const { id } = useParams();

  // {host ? ( ... ) : <h2>Loading...</h2>}  ---- {host.name}

  useEffect(() => {
    if (id) {
      HostService.findById(id)
        .then((instance) => {
          setHost(instance);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  return (
    <Fragment>
      
        <Box className="HostDetails">
          <Stack className="HostDetails_title" direction="row">
            <Button className="HostDetails_back">
              <ArrowBackIcon />
            </Button>
            <Typography variant="h3">Mind Lounge</Typography>
          </Stack>

          <HostCarousel></HostCarousel>
          <HostCarouselFooter></HostCarouselFooter>
          <HostDate></HostDate>
          <Box className="HostDetails_order">
            <HostOrder></HostOrder>
            <HostCart></HostCart>
          </Box>

          <HostContact></HostContact>
        </Box>
      
    </Fragment>
  );
};

export default HostDetails;
