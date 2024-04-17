import React, {  useEffect, useState } from "react";
import Title from "../Home/body/Title"

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import "./form.css";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    fname: "",
    lname: "",
    password: "",
    state: "",
    file: null,
    gender: "",
    age: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // State for showing spinner
  const navigate = useNavigate();

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

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true while processing

    const formDataObj = new FormData();
    formDataObj.append("email", formData.email);
    formDataObj.append("fname", formData.fname);
    formDataObj.append("lname", formData.lname);
    formDataObj.append("age", formData.age);
    formDataObj.append("password", formData.password);
    formDataObj.append("state", formData.state);
    formDataObj.append("gender", formData.gender);
    formDataObj.append("file", formData.file);

    try {
      const response = await axios.post("https://voting-app-api-tn00.onrender.com/signup", formDataObj);
      console.log("Server Response:", response.data.message);
      setFormData({
        email: "",
        fname: "",
        lname: "",
        password: "",
        age: "",
        state: "",
        file: null,
        message: response.data.message,
        gender: "",
      });
      navigate("/login");
    } catch (err) {
      console.error("Error occurred:", err);
      setFormData({
        ...formData,
        file: null,
        message: err.response.data.error,
      });
    } finally {
      setLoading(false); // Reset loading state after request completes
    }
  };

  return (
    <div className="body_container"> 
     <Title title={'Signup Page'} />
      <div style={{marginBottom:"20px"}} className="gotohome"> <Link to={'/'} style={{color:"white"}} > <Tooltip title="Go To Home" placement="right" arrow><HomeIcon sx={{fontSize:40}}/></Tooltip> </Link></div>

      <div className="form_parent_container">

        <form onSubmit={handleSubmit} className="myform_container">
          <div className="singup_text">
            <p>Create an Free Account</p>
            {loading && <div className="spinner"><CircularProgress color="success" /></div>}
          </div>
          {formData.message && (
            <div
              className={
                formData.message.includes("Success") ? "success" : "error"
              }
            >
              {formData.message}
            </div>
          )}
          <div className="myform_input">
            <input
              type="text"
              name="fname"
              placeholder="First name"
              value={formData.fname}
              onChange={handleChange}
            />
          </div>
          <div className="myform_input">
            <input
              type="text"
              name="lname"
              placeholder="Last name"
              value={formData.lname}
              onChange={handleChange}
            />
          </div>
          <div className="myform_input">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="myform_input">
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="myform_input">
            <select
              className="select"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">Select State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli">
                Dadra and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
            </select>
          </div>

          <div className="myform_input radio_container">
          <label>Male</label>
            <input
              type="radio"
              style={{ width: "25px" }}
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            <label>Female</label>
            <input
              type="radio"
              style={{ width: "25px" }}
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
          
          </div>

          <div className="myform_input age_input">
            <input
              type="Number"
              name="age"
              placeholder="Age"
              value={formData.age}
              min={18}
              max={110}
              onChange={handleChange}
            />
          </div>
          <div className="myform_input file">
            <input
              type="file"
              className="file"
              name="file"
              style={{ border: "none" }}
              onChange={handleFileChange}
              accept="image/*"
              // required
            />
          </div>
          <button
            type="submit"
            className="button-86"
            style={{ width: "86%" }}
            disabled={loading} // Disable button while loading
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
          <div style={{ color: "white", marginTop: "10px" }}>
            <p>
              Already have an account? <NavLink to={"/login"}> <Button variant="contained">Login</Button></NavLink>{" "}
            </p>
          </div>
        </form>

        {/* Show spinner if loading */}
      </div>
    </div>
  );
}

export default Signup;
