import "./PrenotationSearch.css";
import {
  Box,
  Stack,
  Typography,
  FormControlLabel,
  Button,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { useSearchParams, useLocation } from "react-router-dom";
import {
  useState,
  ChangeEvent,
  useEffect,
  useCallback,
  SyntheticEvent,
  useMemo,
} from "react";
import { Host } from "../../@types/Host";
import _ from "lodash";
import HostService from "../../service/host.service";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => {
    const searchParams = new URLSearchParams(search);
    const data: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      typeof value === "string" && (data[key] = value);
    });
    return data;
  }, [search]);
}

function PrenotationSearch() {
  const query = useQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setfilters] = useState<Record<string, any>>({
    ...{
      address: "",
      dateInterval: "",
      timeInterval: "",
      tags: [],
    },
    ...query,
  });

  const [tagList, setTagList] = useState<Host.Info["tags"]>([]);

  useEffect(() => {
    HostService.getAllTags()
      .then((tags) => setTagList(tags))
      .catch((error) => console.error(error));
  }, []);

  function handleAddress({ target }: ChangeEvent<HTMLInputElement>) {
    setfilters((prevState) => ({
      ...prevState,
      address: target.value,
    }));
  }

  function handleDateInterval({ target }: ChangeEvent<HTMLInputElement>) {
    setfilters((prevState) => ({
      ...prevState,
      dateIntervall: target.value,
    }));
  }

  function handleTimeInterval({ target }: ChangeEvent<HTMLInputElement>) {
    setfilters((prevState) => ({
      ...prevState,
      timeInterval: target.value,
    }));
  }

  function handleTag(tag: string) {
    return (e: SyntheticEvent<Element, Event>, checked: boolean) => {
      setfilters((prevState) => {
        if (checked) {
          return {
            ...prevState,
            tags: [...prevState.tags, tag],
          };
        } else {
          return {
            ...prevState,
            tags: prevState.tags.filter((t: string) => t !== tag),
          };
        }
      });
    };
  }

  const debouncedFilters = useCallback(
    _.debounce((filters: Record<string, any>) => {
      setSearchParams(filters);
    }, 1000),
    []
  );

  useEffect(() => {
    debouncedFilters(filters);
  }, [filters]);

  return (
    <Stack className="prenotationSearch">
      <Typography variant="h4" className="ps_title">
        Strutture: 78
      </Typography>
      <Box className="ps_search_box">
        <Stack>
          <Typography variant="body1"> Dove? </Typography>
          <span>
            <input
              type="text"
              value={filters.address}
              onChange={handleAddress}
            />
            <LocationOnIcon></LocationOnIcon>
          </span>
        </Stack>
        <Stack>
          <Typography variant="body1"> Quando? </Typography>
          <span>
            <input
              type="text"
              value={filters.dateInterval}
              onChange={handleDateInterval}
            />
            <CalendarMonthIcon></CalendarMonthIcon>
          </span>
        </Stack>
        <Stack>
          <Typography variant="body1"> A che ora? </Typography>
          <span>
            <input
              type="text"
              value={filters.timeInterval}
              onChange={handleTimeInterval}
            />
            <AccessTimeIcon></AccessTimeIcon>
          </span>
        </Stack>
      </Box>
      <Stack className="ps_filter">
        <Button variant="text">Filtri</Button>
        <FormGroup>
          {tagList.map((tag) => (
            <FormControlLabel
              control={<Checkbox />}
              label={tag}
              checked={[filters.tags].flat().some((t: string) => t === tag)}
              onChange={handleTag(tag)}
              key={tag}
            />
          ))}
        </FormGroup>
      </Stack>
    </Stack>
  );
}

export default PrenotationSearch;
