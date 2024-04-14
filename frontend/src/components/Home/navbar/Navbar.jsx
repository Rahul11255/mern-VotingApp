import React, { useState, useEffect } from "react";
import "./navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../images/election-symbol.png";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const toggleMenu = () => {
    setIsopen(!isopen);
  };

  const handleLogout = () => {
    setOpenDialog(true);
  };
 const naviagte = useNavigate()

  const confirmLogout = () => {
    // Clear local storage and update login state
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem('userName')
    setIsLoggedIn(false);
    setOpenDialog(false);
    naviagte('/login')


  };  

  const cancelLogout = () => {
    setOpenDialog(false);
  };


  const isVoted = JSON.parse(localStorage.getItem('isVoted'));
  const linkText = isVoted ? "Profile" : "VoteNow";
  console.log(isVoted);

  return (
    <nav className={isopen ? "navbar expanded" : "navbar"}>
      <div className="logo">
       <NavLink to={'/'}>  <img src={logo} alt="logo" /> </NavLink> 
      </div>
      <div className={isopen ? "navbar_menu nv" : "navbar_menu"}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/votes/count">LiveVotes</NavLink>
        </li>
        {isLoggedIn && localStorage.getItem("role") === "admin" && (
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
        )}
        {isLoggedIn && localStorage.getItem("role") === "voter" && (
          <li>
          <NavLink to="/user/profile">{linkText}</NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li style={{marginTop:"-5px"}}>
            <Button onClick={handleLogout} variant="contained" color="error">
            <LogoutIcon sx={{ fontSize: 22, marginRight: "5px" }} /> Logout
            </Button>
          </li>
        )}
      </div>
      <div className="toggle_menu" onClick={toggleMenu}>
        {isopen ? <CloseIcon sx={{fontSize:40 , color:"#002244"}} /> : <MenuIcon sx={{fontSize:40 , color:"#002244"}} />}
      </div>
      <Dialog open={openDialog} onClose={cancelLogout}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelLogout} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmLogout} color="error" variant="contained">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </nav>
  );
};

export default Navbar;
