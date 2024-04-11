import React, { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import adminImg  from "../../images/adminimg.jpg"
// import adminImg  from "../../images/admin2img.jpg"
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import "./admin.css"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Candidate from "./candidate/Candidate";
import Voter from "./Voter";

import Bus from "./Bus";
import Listitems from "./Listitems";
import { NavLink, useNavigate } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Title from "../body/Title";

const drawerWidth = 200;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function Admin(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuData, setMenudata] = useState("dashboard");
  const [isClosing, setIsClosing] = useState(false);
  // const [token, setToken] = useState(localStorage.getItem("token"));

  const isAdminLoggedIn = () => {
    return (
      localStorage.getItem("isLoggedIn") === "true" &&
      localStorage.getItem("role") === "admin"
    );
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAdminLoggedIn()) {
      // Redirect to login page if not logged in as admin
      return navigate("/");
    }
  });

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar title="Go-to-Home"  className="admin_dashboard_text" > <NavLink to={'/'}> <HomeIcon sx={{ fontSize: 50 }}/> </NavLink></Toolbar>
      <Divider />
      <List>
      <Tooltip title="Jai Shree Ram " placement="right" arrow >
         <div className="drawer_img_container">
         <img src={adminImg} alt="" />
         </div>
         </Tooltip>
      </List>
      <List>
        <Listitems
          selected={menuData === "dashboard"}
          onClick={() => setMenudata("dashboard")}
          text={"DashBoard"}
          icons={<DashboardIcon/>}
        />
        <Listitems
          selected={menuData === "candidate"}
          onClick={() => setMenudata("candidate")}
          text={"Candidate"}
          icons={<PersonAddIcon/>}

        />
        <Listitems
          selected={menuData === "voter"}
          onClick={() => setMenudata("voter")}
          text={"Voter"}
          icons={<DashboardIcon/>}

        />
        <Listitems
          selected={menuData === "bus"}
          onClick={() => setMenudata("bus")}
          text={"Bus"}
          icons={<DashboardIcon/>}

        />
      </List>
      <Divider />
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
    <Title title={"Admin Dashboard"} />
    
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={6}
        className="appBar"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* contnet */}
        {menuData === "dashboard" && <Dashboard/>}
        {menuData === "candidate" && <Candidate />}
        {menuData === "voter" && <Voter />}
        {menuData === "bus" && <Bus />}
      </Box>
    </Box>
  );
}
