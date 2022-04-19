import React, { useEffect, Fragment, useState } from "react";
import "./SearchResults.css";
import PrenotationSearch from "../../components/PrenotationSearch/PrenotationSearch";
import ResultCard from "../../components/ResultCard/ResultCard";
import MobileFilter from "../../components/MobileFilter/MobileFilter";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Host } from "../../@types/Host";
import { useAppDispatch } from "../../store";
import { findHosts } from "../../store/features/host/slice";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const SearchResults: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
          <Button variant="text" onClick={() => navigate("/")}>
            Homepage
          </Button>
          <ArrowForwardIosIcon />
          <Button variant="text" disabled>
            Ricerca
          </Button>
        </Stack>

        <Stack className="viewMap">
          {/*<Button variant="text">Visualiza su mappa</Button>*/}
        </Stack>

        <MobileFilter></MobileFilter>

        <Box className="sr_container">
          <div className="ps_container">
            <Typography variant="h4" className="ps_title">
              Strutture: {hosts.length}
            </Typography>
            <PrenotationSearch />
          </div>
          {status === "failed" && (
            <Typography>
              No host found with this filters. Please try with different
              filters.
            </Typography>
          )}
          {status === "loading" && (
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
          {status === "idle" && (
            <Box className="myCardContainer">
              {hosts.length ? (
                hosts.map((host) => <ResultCard host={host} key={host.id} />)
              ) : (
                <Typography>
                  No host found with this filters. Please try with different
                  filters.
                </Typography>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </Fragment>
  );
});

export default SearchResults;
