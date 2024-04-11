import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import "./login.css";
import HomeIcon from '@mui/icons-material/Home';
import Title from "../Home/body/Title"
// import BadgeIcon from "@mui/icons-material/Badge";
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { Tooltip } from "@mui/material";

const Login = () => {
  const initialFormData = {
    email: "",
    password: "",
    message: "",
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // State for showing spinner
  const [formData, setFormData] = useState(initialFormData);


  useEffect(() => {
    // Check if user is already logged in
    if (localStorage.getItem("isLoggedIn") === "true") {
        navigate("/")
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true while processing
    try {
      const response = await axios.post("/login", formData);
      console.log("Server Response:", response.data.message);
      const { role ,fname , _id} = response.data.user;
      // Inside handleSubmit function after successful login
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('role', role);
      localStorage.setItem('token',response.data.token)
      localStorage.setItem('userName', fname);
      localStorage.setItem('id', _id);





      setFormData({ ...initialFormData, message: response.data.message });
      setTimeout(() => {
        if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }, 1000); 

    } catch (err) {
      console.error("Error occurred:", err);
      setFormData({
        ...formData, 
        message: err.response.data.error,
      });
    }finally {
      setLoading(false); // Reset loading state after request completes
    }
  };

  return (
    <div className="plogin_container">
    <Title title={"Login Page"} />
    
      <div className="clogin_container">
        <form className="login_form" onSubmit={handleSubmit}>
          <div className="login_logo">
          <Link to={'/'}>
           <Tooltip title="Go to Home" arrow  placement="top-start">
            <HomeIcon sx={{ fontSize: 40 }} style={{color:"white"}} />
            </Tooltip>
            </Link>
          </div>
          <div className="login_text">
            <p>Login</p>
          </div>
          {formData.message && (
            <div
              className={
                formData.message.includes("successful") ? "succ" : "err"
              }
            >
              {formData.message}
            </div>
          )}
          <input
            onChange={handleChange}
            name="email"
            value={formData.email}
            className="login_input"
            type="email"
            placeholder="Enter your Email "
          />
          <input
            onChange={handleChange}
            name="password"
            value={formData.password}
            className="login_input"
            type="password"
            placeholder="Enter your Password"
          />
          <button className="login_btn" 
            disabled={loading} // Disable button while loading
           type="submit">
           {loading ? "Login......" : "Login"}
          </button>
          <div style={{ color: "white" }}>
            <p>
              Don't have an account? <NavLink to={"/signup"}> <Button variant="contained">Signup</Button></NavLink>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
