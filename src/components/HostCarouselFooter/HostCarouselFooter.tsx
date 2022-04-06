import * as React from "react";
import "./HostCarouselFooter.css";
import { Box } from "@mui/material";
import { Host } from "../../@types/Host";

const HostCarouselFooter: React.FC<Pick<Host.Info, "address" | "tags">> = ({
  address,
  tags,
}) => {
  return (
    <Box className="HostCarouselFooter">
      <span className="HostCarouselFooter_address">
        {`${address.street}, ${address.city}, ${address.state}`}
      </span>
      <Box className="HostCarouselFooter_features">
        {tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </Box>
    </Box>
  );
};

export default HostCarouselFooter;
