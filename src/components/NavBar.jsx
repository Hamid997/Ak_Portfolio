import "../App.css";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";

function Navbar() {
  const [open, setOpen] = useState(false);

  const Navigation = ["About", "Skills", "Projects", "Educations", "Contact"];

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  /* auto-close drawer when resizing to desktop */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 701 && open) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation">
      {/* Drawer Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "1rem",
        }}
      >
        <IconButton onClick={toggleDrawer(false)}>
          <X color="white" size={28} />
        </IconButton>
      </Box>

      {/* Drawer List */}
      <List>
        {Navigation.map((item) => (
          <ListItem
            key={item}
            disablePadding
            sx={{
              justifyContent: "center",
              textAlign: "center",
              transition: "0.2s",

              "&:hover": {
                backgroundColor: "#3b3b44",
              },
            }}
          >
            <HashLink
              smooth
              to={`/#${item}`}
              className="nav-link-mobile"
              onClick={() => setOpen(false)} // ✅ close after click
            >
              <ListItemText primary={item} />
            </HashLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <HashLink to="/" className="portfolio-logo">
            {"<Ak />"}
          </HashLink>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-nav">
          {Navigation.map((item) => (
            <li key={item} className="nav-item">
              <HashLink smooth to={`/#${item}`} className="nav-link">
                {item}
              </HashLink>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div className="mobile-menu-button-div">
          <Button
            onClick={toggleDrawer(true)}
            className="mobile-menu-button"
            disableRipple
            disableFocusRipple
            disableTouchRipple
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <Menu size={32} color="white" />
          </Button>
        </div>
      </div>

      {/* MUI Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        BackdropProps={{
          sx: {
            backdropFilter: "blur(2px)",
            backgroundColor: "rgba(0, 0, 0, 0.35)",
          },
        }}
        PaperProps={{
          sx: {
            backgroundColor: "#27272a",
            color: "#fff",
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </nav>
  );
}

export default Navbar;
