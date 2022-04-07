import * as React from "react";
import "./HostCart.css";
import { Box, Button, Stack } from "@mui/material";
import { Host } from "../../@types/Host";

const HostCart: React.FC<{
  book: Pick<Host.Space, "price" | "currency" | "type"> & { spots: number };
}> = ({ book }) => {

  return (
    <Box className="HostCart">
      <h3>Summary</h3>
      <Stack className="HostCart_stack">
        <p>
          {book.spots} x {book.type}
        </p>
      </Stack>
      <p className="HostCart_total">
        {book.price * book.spots}
        <small>{book.currency}</small>
      </p>
      <Button>Book now</Button>
    </Box>
  );
};

export default HostCart;
