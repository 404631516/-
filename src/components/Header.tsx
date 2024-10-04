// components/Header.tsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const drawerList = () => (
    <List sx={{ width: 250 }}>
      <ListItemButton component={Link} to="/" onClick={toggleDrawer(false)}>
        <ListItemText primary="首頁" />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/about"
        onClick={toggleDrawer(false)}
      >
        <ListItemText primary="關於我" />
      </ListItemButton>
    </List>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar className="header">
          <Typography variant="h6" sx={{ flexGrow: 1 }} className="head-title">
            我的作品集
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            className=""
          >
            <Typography variant="h6" sx={{ fontSize: "20px" }}>
              選單
            </Typography>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
    </>
  );
};

export default Header;
