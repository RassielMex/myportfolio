import React from "react";
import { Avatar, Chip, Stack } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import FolderIcon from "@mui/icons-material/Folder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <Avatar sx={{ marginLeft: "2rem" }}>RM</Avatar>
      <Stack
        spacing={2}
        direction={"row"}
        justifyContent={"end"}
        alignItems={"center"}
        marginX={"1rem"}
        marginY={"0.5rem"}
      >
        <Chip
          icon={<AccountCircleIcon />}
          label="About Me"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
          color="default"
        />
        <Chip
          icon={<CallIcon />}
          label="Contact"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
          color="default"
        />
        <Chip
          icon={<FolderIcon />}
          label="Projects"
          component="a"
          href="#basic-chip"
          variant="outlined"
          clickable
          color="default"
        />
      </Stack>
    </Stack>
  );
};

export default Navbar;
