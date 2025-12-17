import "../App.css";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

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

  const toggleDrawer = (state) => () => setOpen(state);

  /* ✅ Auto-close drawer on desktop resize */
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
    <Box
      role="presentation"
      sx={{
        width: 300,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "1rem",
        }}
      >
        <IconButton onClick={toggleDrawer(false)}>
          <X size={28} color="white" />
        </IconButton>
      </Box>

      {/* Navigation (takes space) */}
      <Box sx={{ flexGrow: 1 }}>
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
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item} />
              </HashLink>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Social Links (anchored bottom) */}
      <Box
        className="links-block"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          padding: "1.25rem",
          borderTop: "1px solid #3f3f46",
        }}
      >
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="social-links"
        >
          <Github size={25} />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="social-links"
        >
          <Linkedin size={25} />
        </a>

        <a
          href="mailto:youremail@example.com"
          className="social-links"
        >
          <Mail size={25} />
        </a>
      </Box>
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

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        BackdropProps={{
          sx: {
            backdropFilter: "blur(2px)",
            backgroundColor: "rgba(0,0,0,0.35)",
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