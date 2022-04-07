import * as React from "react";
import './HostContact.css';
import { Box } from "@mui/material";
import { Host } from "../../@types/Host";

const HostContact: React.FC<{ contact: Host.Contact }> = ({contact}) => {
    
  return (
    

      <Box className="HostContact">
        <h2>Locations Contact</h2>
        <Box className="HostContact_box">
        <p>{ contact.email}</p>
        <p>{contact.phoneNumber}</p>
        </Box>
      </Box>

  )
}

export default HostContact;