import * as React from "react";
import "./HostOrder.css";
import { Box, Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Host } from "../../@types/Host";

const HostOrder: React.FC<{
  spaces: Host.Space[];
  setBook: (x: any) => void;
}> = ({ spaces, setBook }) => {
  function handleSpotBooking(count: string, space: Host.Space) {
    setBook({
      type: space.type,
      price: space.price,
      currency: space.currency,
      spots: parseFloat(count),
      id: space.id,
    });
  }

  return (
    <Box className="HostOrder">
      {spaces.map((space) => (
        <React.Fragment key={space.id}>
          <Box className="HostOrder_container">
            <Box className="HostOrder_desc_box">
              <img src={space.images[0]} alt="unsplash image" />
              <Stack className="HostOrder_desc">
                <Typography variant="h5">{space.type}</Typography>
                {space.optionals.map((option) => (
                  <span key={option}>
                    <CheckIcon /> <p>{option}</p>
                  </span>
                ))}
              </Stack>
            </Box>

            <Box className="HostOrder_info_box">
              <Stack className="HostOrder_info">
                <div className="HostOrder_info_div">
                  <h4>Prezzo</h4>
                  <span>
                    <h3>
                      {space.price}
                      <small>{space.currency}</small>
                    </h3>
                  </span>
                </div>
                <div className="HostOrder_info_div">
                  <h4>Disponibilità</h4>
                  <span>
                    <h4>2/{space.spots}</h4>
                  </span>
                </div>
                <div className="HostOrder_info_div">
                  <h4>Quantità</h4>
                  <span className="quantity_span">
                    <select
                      className="quantity"
                      name="quantity"
                      id="quantity"
                      onChange={(e) => {
                        handleSpotBooking(e.target.value, space);
                      }}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </span>
                </div>
              </Stack>
            </Box>
          </Box>

          <hr className="separator" />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default HostOrder;
