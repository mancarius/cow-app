import { useEffect, Fragment, useState } from "react";
import "./SearchResults.css";
import PrenotationSearch from "../../components/PrenotationSearch/PrenotationSearch";
import ResultCard from "../../components/ResultCard/ResultCard";
import { useSearchParams } from "react-router-dom";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Host } from "../../@types/Host";
import { useAppDispatch } from "../../store";
import { findHosts } from "../../store/features/host/slice";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const SearchResults: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchPArams] = useSearchParams();
  const { hosts, status } = useSelector((state: RootState) => state.hosts);

  useEffect(() => {
    const address = searchParams.get("address") || "";
    const dateInterval = searchParams.get("dateInterval") || undefined;
    const timeInterval = searchParams.get("timeInterval") || undefined;
    const tags = searchParams.getAll("tags");

    const filters: Partial<Host.Filters> = {
      address,
      tags,
    };

    if (dateInterval) {
      const [start, end] = dateInterval
        .split("-")
        .map((d) => new Date(d.trim()).getTime());
      filters.date = { start, end };
    }

    if (timeInterval) {
      const [start, end] = timeInterval.split("-").map((t) => t.trim());
      filters.timeSlot = { start, end };
    }

    dispatch(findHosts(filters as Host.Filters));
  }, [searchParams]);

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default SearchResults;
