import "./PrenotationSearch.css";
import { Box, Stack, Typography, FormGroup } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import _ from "lodash";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationSearchInput from "../LocationSearchInput/LocationSearchInput";
import FilterTagList from "../FilterTagList/FilterTagList";
import DatePickerInput from "../DatePickerInput/DatePickerInput";
import { isValidDate } from "../../utils/date-utils";

const PrenotationSearch = React.memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [address, setAddress] = useState<string>(
    searchParams.get("address") || ""
  );
  const [dateInterval, setDateInterval] = useState<(Date | null)[]>([
    null,
    null,
  ]);
  const [timeInterval, setTimeInterval] = useState<string>(
    searchParams.get("timeInterval") || ""
  );
  const [tags, setTags] = useState<string[]>(searchParams.getAll("tags"));

  const debouncedFilters = useCallback(
    _.debounce(() => {
      console.log({ address, dateInterval, timeInterval, tags });
      setSearchParams({
        address,
        dateInterval: dateInterval
          .map((date) => (date ? date.toLocaleDateString() : ""))
          .join("-"),
        timeInterval,
        tags,
      });
    }, 1000),
    [address, dateInterval, timeInterval, tags]
  );

  useEffect(() => {
    debouncedFilters();
  }, [address, dateInterval, timeInterval, tags]);

  useEffect(() => {
    const dateInterval = searchParams.get("dateInterval")?.split("-");
    console.log({dateInterval})
    dateInterval && dateInterval.length &&
      setDateInterval(
        dateInterval.map((date) => (isValidDate(date) ? new Date(date) : null))
      );
  }, []);

  return (
    <Stack className="prenotationSearch">
      <Box className="ps_search_box">
        <Stack>
          <Typography variant="body1"> Where? </Typography>
          <span className="box">
            <LocationSearchInput address={address} setAddress={setAddress} />
            <LocationOnIcon />
          </span>
        </Stack>
        <Stack>
          <Typography variant="body1"> When? </Typography>
          <span className="box">
            <DatePickerInput
              value={dateInterval}
              setDateInterval={setDateInterval}
            />
            <CalendarMonthIcon></CalendarMonthIcon>
          </span>
        </Stack>
        <Stack>
          <Typography variant="body1"> What time? </Typography>
          <span className="box">
            <input
              type="text"
              value={timeInterval}
              onChange={(e) => setTimeInterval(e.target.value)}
            />
            <AccessTimeIcon></AccessTimeIcon>
          </span>
        </Stack>
      </Box>
      <Stack className="ps_filter">
        <Typography variant="h6">Filtri</Typography>
        <FormGroup>
          <FilterTagList tags={tags} setTags={setTags} />
        </FormGroup>
      </Stack>
    </Stack>
  );
});

export default PrenotationSearch;
