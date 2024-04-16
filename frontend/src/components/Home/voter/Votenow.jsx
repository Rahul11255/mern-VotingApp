import React, { useEffect, useState } from "react";
import { memo } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import CandidateTables from "./CandidateTables";
import { useNavigate } from "react-router-dom";
import HowToVoteIcon from "@mui/icons-material/HowToVote";

const Votenow = ({ userData, fetchUserData }) => {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState([]);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [voteMessage, setVoteMessage] = useState("");

  const openConfirmation = (candidate) => {
    setSelectedCandidate(candidate);
    setConfirmationOpen(true);
  };

  const closeConfirmation = () => {
    setSelectedCandidate(null);
    setConfirmationOpen(false);
  };

  const voteForCandidate = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`/vote/${selectedCandidate._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setVoteMessage(response.data.message);
      await fetchUserData();
      closeConfirmation();
      setTimeout(() => {
        setVoteMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  const fetchCandidates = async () => {
    try {
      const response = await axios.get("/candidates");
      setCandidates(response.data);
      console.log(response.data);
    } catch (err) {
      console.error("Error fetching candidates:", err);
    }
  };

  useEffect(() => {
    fetchCandidates();
    console.log("first");
  }, []);

  return (
    <>
      {userData && userData.role !== "admin" ? (
        userData.isVoted ? (
          <div className="userisvoted">
            <h3>
              You have already voted.
              <Button
                color="secondary"
                variant="contained"
                startIcon={<HowToVoteIcon />}
                endIcon={<HowToVoteIcon />}
                onClick={() => {
                  navigate("/votes/count");
                }}
              >
                Check the live Vote count for updates.
              </Button>
            </h3>
          </div>
        ) : (
          <div id="votenow">
            <CandidateTables
              candidates={candidates}
              openConfirmation={openConfirmation}
            />

            <Dialog
              open={confirmationOpen}
              onClose={closeConfirmation}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Confirm Vote"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to vote for {selectedCandidate && selectedCandidate.party}?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={closeConfirmation}>Cancel</Button>
                <Button onClick={voteForCandidate} autoFocus>
                  Vote
                </Button>
              </DialogActions>
            </Dialog>
            {voteMessage && <p>{voteMessage}</p>}
          </div>
        )
      ) : (
        userData && (
          <div className="userisvoted">
            <h1>The admin is not allowed to vote for any candidates</h1>
            <Button
              onClick={() => {
                navigate("/votes/count");
              }}
              color="secondary"
              variant="contained"
              startIcon={<HowToVoteIcon />}
              endIcon={<HowToVoteIcon />}
            >
              Check the live Vote count for updates.
            </Button>
          </div>
        )
      )}
    </>
  );
};

export default memo(Votenow);
