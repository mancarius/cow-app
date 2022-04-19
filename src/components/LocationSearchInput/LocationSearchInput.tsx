import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import HereApi from "../../service/here-api.service";
import { Here } from "../../@types/Here";
import { throttle } from "lodash";
import './LocationSearchInput.css';

const LocationSearchInput: React.FC<{
  name?: string;
  placeholder?: string;
  address: Here.Item["address"]["city"];
  setAddress: (address: Here.Item["address"]["city"]) => void;
}> = ({ address, setAddress, placeholder = "", name }) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly Here.Item[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(address);
  const [value, setValue] = React.useState<Here.Item | null>(null);

  const fetch = React.useMemo(
    () =>
      throttle(
        (
          request: { input: string },
          callback: (results: readonly Here.Item[]) => void
        ) => {
          HereApi.autocomplete(request.input)
            .then(callback)
            .catch((error) => console.warn(error));
        },
        200
      ),
    []
  );

  React.useEffect(() => {
    let active = true;
    setLoading(true);
    fetch({ input: inputValue }, (results: readonly Here.Item[]) => {
      if (active) {
        setLoading(false);
        setOptions([...results]);
      }
    });

    return () => {
      active = false;
    };
  }, [inputValue]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  React.useEffect(() => {
    setAddress(value?.address.city ?? '');
  }, [value]);

  return (
    <Autocomplete
      id="locationSearchInput"
      sx={{ width:"100%"}}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      onChange={(event, newValue: Here.Item | null) => {
        setValue(newValue);
      }}
      value={value}
      inputValue={inputValue}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.address.city}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          {...{ name, placeholder }}
          autoComplete="off"
          variant="standard"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default LocationSearchInput;
