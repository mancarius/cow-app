import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import HostService from "../../service/host.service";

import "./HostDetails.css";
import HostCarousel from "../../components/HostCarousel/HostCarousel";
import HostOrder from "../../components/HostOrder/HostOrder";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const HostDetails: React.FC = () => {
  const [host, setHost] = useState<HostService | null>(null);
  const { id } = useParams();

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
      {host ? (
        <Box className="HostDetails">
          <Stack direction="row">
            <Button>
              <ArrowBackIcon />
            </Button>
            <Typography variant="h4">{host.name}</Typography>
          </Stack>
          <HostCarousel></HostCarousel>
          <HostOrder></HostOrder>
        </Box>
      ) : <h2>Loading...</h2>}
    </Fragment>
  );
};

export default HostDetails;
