import React, { useState, useEffect } from "react";

import axios from "axios";
import ErrorIcon from "@mui/icons-material/Error";

import defaultimg from "../../images/avtar (2).png";
import "./vote.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import Title from "../body/Title";
import DataLoading from "../DataLoading";
import SwiperCarsoul from "./SwiperCarsoul";

const Votecount = () => {
  const [candidates, setCandidates] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalvote, setTotalvote] = useState(0);
  const [maxCount, setMaxcount] = useState(0);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/candidate/vote");
      setCandidates(response.data.candidates);
      setMaxcount(response.data.candidates[0].voteCount);
      setTotalvote(response.data.totalvoted);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch Candidate Data");
    } finally {
      setIsLoading(false);
    }
  };
  const color = ["#ff6347", "#fbceb1", "#99FFFF"];
  return (
    <div className="votes_container">
      <Title title={"Total vote counts"} />
      <div className="votes_carsoul_container">
       <SwiperCarsoul/>
      </div>
      <div className="votes_table">
        <div className="table_container_votec">
          <TableContainer>
            <Table>
              <TableHead sx={{ backgroundColor: "#007FFF" }}>
                <TableRow>
                  <TableCell>
                    <p className="table_th_Cell">S.No</p>
                  </TableCell>
                  <TableCell>
                    <p className="table_th_Cell">Candidate</p>
                  </TableCell>
                  <TableCell>
                    <p className="table_th_Cell">Party name</p>
                  </TableCell>
                  <TableCell>
                    <p className="table_th_Cell">Votes</p>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoading ? (
                  <DataLoading />
                ) : error ? (
                  <div className="loading">
                    {" "}
                    <ErrorIcon
                      style={{ color: "red" }}
                      sx={{ fontSize: 60 }}
                    />{" "}
                    <h3>Error: {error}</h3>
                  </div>
                ) : (
                  candidates?.map((candidate, index) => (
                    <TableRow
                      key={index}
                      sx={{ backgroundColor: color[index] }}
                    >
                      <TableCell>
                        <p className="tabel_bd_cell">{index + 1}</p>
                      </TableCell>
                      <TableCell sx={{ fontSize: "25px", textAlign: "center" }}>
                        <img
                          loading="lazy"
                          className={
                            candidate.images ? "candidate_logo" : "default_logo"
                          }
                          src={candidate.images || defaultimg}
                          alt="candidate_logo"
                        />
                      </TableCell>
                      <TableCell>
                        <p className="tabel_bd_cell">
                          {candidate.party}
                          {candidate.voteCount === maxCount && (
                            <Button
                              style={{ color: "lightgreen" }}
                              variant="contained"
                              disabled
                              size="small"
                            >
                              Winner
                            </Button>
                          )}
                        </p>
                      </TableCell>
                      <TableCell>
                        <p className="tabel_bd_cell">
                          {candidate.voteCount}/{totalvote}
                        </p>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Votecount;
