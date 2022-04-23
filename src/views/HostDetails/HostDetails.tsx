import { useEffect, useState, Fragment, memo } from "react";
import { useParams } from "react-router-dom";
import HostService from "../../service/host.service";
import "./HostDetails.css";
import HostCarousel from "../../components/HostCarousel/HostCarousel";
import HostOrder from "../../components/HostOrder/HostOrder";
import HostCarouselFooter from "../../components/HostCarouselFooter/HostCarouselFooter";
import HostCart from "../../components/HostCart/HostCart";
import HostContact from "../../components/HostContact/HostContact";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Host } from "../../@types/Host";

const HostDetails: React.FC = memo(() => {
  const [host, setHost] = useState<HostService | null>(null);
  const [book, setBook] = useState<
    Pick<Host.Space, "price" | "currency" | "type" | "id"> & { spots: number }
  >({
    price: 0,
    currency: "",
    type: "",
    spots: 0,
    id: "",
  });
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      HostService.findById(id)
        .then((instance) => {
          setHost(instance);
          console.log(instance?.images);
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
            <Button className="HostDetails_back" onClick={() => history.back()}>
              <ArrowBackIcon />
            </Button>
            <Typography variant="h4">{host.name}</Typography>
          </Stack>
          <HostCarousel hostId={id as string} images={host.images} />
          <HostCarouselFooter
            tags={host.tags}
            address={host.address}
          ></HostCarouselFooter>
          <Box className="HostDetails_order">
            <HostOrder spaces={host.spaces} setBook={setBook}></HostOrder>
            {!!book.spots && <HostCart book={book}></HostCart>}
          </Box>

          <HostContact contact={host.contact}></HostContact>
        </Box>
      ) : (
        <Box
          sx={{
            height: "50vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Fragment>
  );
});

export default HostDetails;
