import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

//import CallIcon from "@mui/icons-material/Call";
import FolderIcon from "@mui/icons-material/Folder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const DrawerNav = ({ openDrawer, onClose }) => {
  return (
    <Drawer id="drawer" open={openDrawer} onClose={onClose} anchor={"left"}>
      <List>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/"
          onClick={onClose}
        >
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText> Inicio</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        {/* <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <Link underline="none" href="#Contact" color={"inherit"}>
              Contacto
            </Link>
          </ListItemButton>
        </ListItem> */}
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/Projects"
          onClick={onClose}
        >
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText>Proyectos</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default DrawerNav;
