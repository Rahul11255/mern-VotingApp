import React, { useEffect, useState, useCallback } from "react";
import {
  Grid,
  Button,
  Stack,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import "./candidate.css";

const Candidate = () => {
  const initialFormData = {
    name: "",
    party: "",
    age: "",
    message: "",
  };
  // handle all state
  const [formData, setFormData] = useState(initialFormData);
  const [showAlert, setShowAlert] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [openDialog, setOpenDialog] = useState(false); // State to control dialog visibility

  useEffect(() => {
    fetchCandidates();
  }, []);

  // fetching candidate data
  const fetchCandidates = async () => {
    try {
      const response = await axios.get("/candidates");
      setCandidates(response.data);
    } catch (err) {
      console.error("Error fetching candidates:", err);
    }
  };

  // show error msg and after some time display none
  useEffect(() => {
    if (formData.message) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
        setFormData((prevFormData) => ({ ...prevFormData, message: "" }));
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [formData.message]);

  // handle all inputs
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      message: "",
    }));
  }, []);

  // delete candidates
  const deleteCandidate = async (path) => {
    const token = localStorage.getItem("token");
    try {
      const deleteConfirmed = window.confirm(
        "Are you sure you want to Delete the Candidate?"
      );
      if (deleteConfirmed) {
        await axios
          .delete(`/candidates/${path}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res.data.message);
            setFormData({ ...initialFormData, message: res.data.message });
          });
        fetchCandidates();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handle dialog
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // send form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post("/candidate", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFormData({ ...initialFormData, message: response.data.message });
      fetchCandidates();
      handleCloseDialog();
    } catch (err) {
      console.error("Error occurred:", err);
      setFormData({
        ...formData,
        message: err.response.data.error,
      });
    }
  };

  return (
    <div className="candidate_container">
      {/* Show Error message.. */}
      <Stack sx={{ width: "100%" }} spacing={2}>
        {showAlert && (
          <Alert
            variant="filled"
            severity={
              formData.message.includes("successfully") ? "success" : "error"
            }
          >
            {formData.message}
          </Alert>
        )}
      </Stack>
      {/* Button to open dialog */}
      <div style={{ width: "100%", marginTop: "0px" }}>
        <Button
          onClick={handleOpenDialog}
          variant="contained"
          color="primary"
          sx={{ width: "100%" }} // Apply custom width to the button
        >
          <AddIcon />{" "}
          <h3 style={{ textTransform: "capitalize", marginLeft: "5px" }}>
            {" "}
            Add Candidate{" "}
          </h3>
        </Button>
      </div>

      {/* show candidate data in table */}
      <div className="data">
        <table className="candidate_table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Party</th>
              <th>Age</th>
              <th>Votes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{candidate.name}</td>
                <td>{candidate.party}</td>
                <td>{candidate.age}</td>
                <td>{candidate.voteCount}</td>
                <td>
                  <Button
                    variant="contained"
                    onClick={() => {
                      deleteCandidate(candidate._id);
                    }}
                    color="error"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Dialog for adding candidate */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle className="dialog_title">Add Candidate</DialogTitle>
        <DialogContent className="dialog_content">
          <form onSubmit={handleSubmit} className="candidate_form_container">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <input
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  className="candiate_input"
                  placeholder="Enter Candidate Name .."
                />
              </Grid>
              <Grid item xs={12}>
                <select
                  name="party"
                  value={formData.party}
                  className="candiate_input"
                  style={{ cursor: "pointer" }}
                  onChange={handleChange}
                >
                  <option value="">Select Party Name</option>
                  <option value="BJP">Bharatiya Janata Party</option>
                  <option value="INC">Indian National Congress</option>
                  <option value="BSP">Bahujan Samaj Party</option>
                  <option value="AAP">Aam Aadmi Party</option>
                  <option value="AITC">All India Trinamool Congress</option>
                  <option value="CPI">Communist Party of India</option>
                  <option value="AAP">Aam Aadmi Party</option>
                  <option value="Nota">None of the above (India)</option>
                </select>
              </Grid>
              <Grid item xs={12}>
                <input
                  value={formData.age}
                  onChange={handleChange}
                  name="age"
                  min={18}
                  max={100}
                  type="number"
                  className="candiate_input"
                  placeholder="Enter Age .."
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "lightgreen",
                    "&:hover": {
                      backgroundColor: "darkgreen",
                    },
                  }}
                  startIcon={<AddIcon />}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions className="dialog_footer">
          <Button onClick={handleCloseDialog} color="error" variant="outlined">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Candidate;
