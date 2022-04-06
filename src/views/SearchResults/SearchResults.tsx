import {useEffect, Fragment} from "react";
import "./SearchResults.css";
import PrenotationSearch from "../../components/PrenotationSearch/PrenotationSearch";
import ResultCard from "../../components/ResultCard/ResultCard";
import { useSearchParams } from "react-router-dom";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Host } from "../../@types/Host";

const SearchResults: React.FC = () => {
  const [searchParams, setSearchPArams] = useSearchParams();

  useEffect(() => {
    const address = searchParams.get("address") || '';
    const dateInterval = searchParams.get("dateInterval") || undefined;
    const timeInterval = searchParams.get("timeInterval") || undefined;
    const tags = searchParams.getAll('tags');

    /*const filters: Host.Filters = {
      address,
      
    }*/
  }, [searchParams])

  return (
    <Fragment>
      <Box className="searchResultPage">
        <Container
          maxWidth="xl"
          sx={{
            alignSelf: "center",
          }}
        >
          <Stack className="directory" direction="row">
            <Button variant="text">Homepage</Button>
            <ArrowForwardIosIcon />
            <Button variant="text">Piemonte</Button>
            <ArrowForwardIosIcon />
            <Button variant="text">Ricerca</Button>
          </Stack>

          <Stack className="viewMap">
            <Button variant="text">Visualiza su mappa</Button>
          </Stack>

          <Box className="sr_container">
            <div className="ps_container">
              <PrenotationSearch />
            </div>
            <Box className="myCardContainer">
              <ResultCard />
              <ResultCard />
              <ResultCard />
              <ResultCard />
              <ResultCard />
              <ResultCard />
            </Box>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default SearchResults;
