import React, { useState } from "react";
import {
  AppBar,
  Chip,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
//import CallIcon from "@mui/icons-material/Call";
import FolderIcon from "@mui/icons-material/Folder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerNav from "../DrawerNav/DrawerNav";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const onCloseDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <AppBar position="absolute" color="transparent" elevation={0}>
      <Stack direction={"row"} justifyContent="end" alignItems="center">
        {!isMobile && (
          <Stack
            spacing={2}
            direction={"row"}
            justifyContent={"end"}
            alignItems={"center"}
            marginX={"1rem"}
            marginY={"0.5rem"}
          >
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Chip
                icon={<AccountCircleIcon />}
                label="Inicio"
                component="a"
                variant="outlined"
                clickable
                color="default"
              />
            </Link>
            {/* <Chip
              icon={<CallIcon />}
              label="Contacto"
              component="a"
              href="#Contact"
              variant="outlined"
              clickable
              color="default"
            /> */}
            <Link to="/Projects" style={{ textDecoration: "none" }}>
              <Chip
                icon={<FolderIcon />}
                label="Proyectos"
                component="a"
                variant="outlined"
                clickable
                color="default"
              />
            </Link>
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
