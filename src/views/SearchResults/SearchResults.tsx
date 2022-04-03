import * as React from "react";
import "./SearchResults.css";
import NavBar from "../../components/NavBar/NavBar";
import PrenotationSearch from "../../components/PrenotationSearch/PrenotationSearch";
import ResultCard from "../../components/ResultCard/ResultCard";
import Footer from "../../components/Footer/Footer";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SearchResults: React.FC = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Container
        maxWidth="xl"
        sx={{
          alignSelf: "center",
        }}
      >
        <Box className="searchResultPage">
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
        </Box>
      </Container>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default SearchResults;
