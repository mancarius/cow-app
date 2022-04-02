
import * as React from "react";
import './SearchResults.css';
import NavBar from "../../components/NavBar/NavBar";
import PrenotationSearch from "../../components/PrenotationSearch/PrenotationSearch";
import ResultCard from "../../components/ResultCard/ResultCard";

import { Button, Grid, Stack, Typography } from "@mui/material";

const SearchResults: React.FC = () => {

  return (
    <React.Fragment>
      <NavBar />

      <Grid container className="searchResultPage" px="5%">

        <Stack className="directory" direction="row">
          <Button variant="text">Homepage</Button>
          
          <Button variant="text">Piemonte</Button>
          
          <Button variant="text">Ricerca</Button>
        </Stack>

        <Stack className="viewMap">
          <Button variant="text">Visualiza su mappa</Button>
        </Stack>

        <Grid item xs={3} >
          <PrenotationSearch />
        </Grid>
        <Grid item xs={9} className="myCardContainer"  >
          
              <ResultCard />
              <ResultCard />
              <ResultCard />

              <ResultCard />
              <ResultCard />
              <ResultCard />

        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default SearchResults