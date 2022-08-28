import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Chip,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import FolderIcon from "@mui/icons-material/Folder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerNav from "../DrawerNav/DrawerNav";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const onCloseDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <AppBar position="static" color="default">
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Avatar sx={{ marginLeft: "2rem" }}>RM</Avatar>
        {!isMobile && (
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
              label="Sobre mí"
              component="a"
              href="#About"
              variant="outlined"
              clickable
              color="default"
            />
            <Chip
              icon={<CallIcon />}
              label="Contacto"
              component="a"
              href="#Contact"
              variant="outlined"
              clickable
              color="default"
            />
            <Chip
              icon={<FolderIcon />}
              label="Proyectos"
              component="a"
              href="#Projects"
              variant="outlined"
              clickable
              color="default"
            />
          </Stack>
        )}
        {isMobile && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setOpenDrawer(!openDrawer);
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Stack>
      <DrawerNav openDrawer={openDrawer} onClose={onCloseDrawer} />
    </AppBar>
  );
};

export default Navbar;
