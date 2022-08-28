import {
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import React from "react";

import CallIcon from "@mui/icons-material/Call";
import FolderIcon from "@mui/icons-material/Folder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const DrawerNav = ({ openDrawer, onClose }) => {
  return (
    <Drawer
      id="drawer"
      open={openDrawer}
      onClose={() => {
        onClose();
      }}
      anchor={"left"}
    >
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <Link underline="none" href="#About" color={"inherit"}>
              Sobre mí
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <Link underline="none" href="#Contact" color={"inherit"}>
              Contacto
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <Link underline="none" href="#Projects" color={"inherit"}>
              Proyectos
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerNav;
