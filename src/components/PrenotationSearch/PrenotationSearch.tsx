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
import TimePickerInput from "../TimePickerInput/TimePickerInput";

const dateIntervalStringToArray = (date: string | null) => {
  const dateInterval = date?.split("-");
  if (dateInterval && dateInterval.length)
    return dateInterval.map((date) =>
      isValidDate(date) ? new Date(date) : null
    );
  else return [null, null];
};

const timeIntervalStringToArray = (time: string | null) => {
  const timeInterval = time?.split("-");
  if (timeInterval && timeInterval.length)
    return timeInterval.map((t) => (isValidDate(t) ? t : null));
  else return [null, null];
};

const PrenotationSearch = React.memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [address, setAddress] = useState<string>(
    searchParams.get("address") || ""
  );
  const [dateInterval, setDateInterval] = useState<(Date | null)[]>(
    dateIntervalStringToArray(searchParams.get("dateInterval") || null)
  );
  const [timeInterval, setTimeInterval] = useState<(string | null)[]>(
    timeIntervalStringToArray(searchParams.get("timeInterval") || null)
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
        timeInterval: timeInterval
          .map((time) => (time ? time : ""))
          .join("-"),
        tags,
      });
    }, 1000),
    [address, dateInterval, timeInterval, tags]
  );

  useEffect(() => {
    debouncedFilters();
  }, [address, dateInterval, timeInterval, tags]);

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
            <TimePickerInput
              value={timeInterval}
              setTimeInterval={setTimeInterval}
            />
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
