import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar";
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


const Votecount = () => {
  const [candidates, setCandidates] = useState();
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
    }
  };
  const color = ["#ff6347", "#fbceb1", "#99FFFF"];
  return (
    <div style={{ padding: "10px" }} className="votes_container">
    <Title title={"Total vote counts"} />

      <Navbar />
      <div className="votes_table">
        <div className="table_container_votec">
          <TableContainer >
            <Table>
              <TableHead sx={{ backgroundColor: "#007FFF" }}>
                <TableRow>
                  <TableCell>
                    <p className="table_th_Cell">No</p>
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
                {candidates?.map((candidate, index) => (
                  <TableRow key={index} sx={{ backgroundColor: color[index] }}>
                    <TableCell>
                      <p className="tabel_bd_cell">{index + 1}</p>
                    </TableCell>
                    <TableCell sx={{ fontSize: "25px", textAlign: "center" }}>
                      {candidate.images ? (
                        <img
                        loading="lazy"
                          className="candidate_logo"
                          src={candidate.images}
                          alt="candidate_logo"
                        />
                      ) : (
                        <img
                        loading="lazy"
                          className="default_logo"
                          src={defaultimg}
                          alt="default_logo"
                        />
                      )}
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
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Votecount;
