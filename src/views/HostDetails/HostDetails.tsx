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
import { Host } from "../../@types/Host";

const HostDetails: React.FC = () => {
  const [host, setHost] = useState<HostService | null>(null);
  const [book, setBook] = useState<
    Pick<Host.Space, "price" | "currency" | "type" | "id"> & { spots: number }
  >({
    price: 0,
    currency: "",
    type: "",
    spots: 0,
    id: ''
  });
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
      {host ? (
        <Box className="HostDetails">
          <Stack className="HostDetails_title" direction="row">
            <Button className="HostDetails_back" onClick={()=>history.back()}>
              <ArrowBackIcon />
            </Button>
            <Typography variant="h3">{host.name}</Typography>
          </Stack>

          <HostCarousel images={host.images}></HostCarousel>
          <HostCarouselFooter
            tags={host.tags}
            address={host.address}
          ></HostCarouselFooter>
          <HostDate></HostDate>
          <Box className="HostDetails_order">
            <HostOrder spaces={host.spaces} setBook={setBook}></HostOrder>
            {book.spots && <HostCart book={book}></HostCart>}
          </Box>

          <HostContact contact={host.contact}></HostContact>
        </Box>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default HostDetails;
