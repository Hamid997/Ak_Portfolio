import "../App.css";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function Navbar() {
  const [open, setOpen] = useState(false);

  const Navigation = ["About", "Skills", "Projects", "Educations", "Contact"];

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)} className="navbar-nav-mobile  drawer-block">
      <List>
        {Navigation.map((item) => (
          <ListItem key={item} disablePadding className="nav-item-mobile">
            <HashLink
              smooth
              to={`/#${item}`}
              className="nav-link"
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
          <Button onClick={toggleDrawer(true)} className="mobile-menu-button">
            {open ? <X size={32} /> : <Menu size={32} />}
          </Button>
        </div>
      </div>

      {/* MUI Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </nav>
  );
}

export default Navbar;
