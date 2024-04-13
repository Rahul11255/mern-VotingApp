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
  const color = ["#ff6347", "#FFD700", "#99FFFF","#F0E68C"];
  return (
    <div className="votes_container">
      <Title title={"Total vote counts"} />
      <section className="votes_carsoul_container">
       <SwiperCarsoul/>
      </section>
      <section className="party_info_container">
        <div className="party_hero_text"><h1>POLITICAL PARTIES</h1> </div>
        <div className="party_card_container">
          <div className="p_card_item">
             <h3>Bharatiya Janata Party</h3>
             <h5>BJP</h5>
             <p>Since 2014, it has been the ruling political party in India under the incumbent Prime Minister Narendra Modi.</p>
          </div>  
          <div className="p_card_item">
             <h3>Congress</h3>
             <h5>INC</h5>
             <p>The Indian National Congress (INC), colloquially the Congress Party or simply the Congress, is a political party in India with deep roots in most regions of India. Founded on 28 December 1885,</p>
          </div>
          <div className="p_card_item">
             <h3>Aam Aadmi Party</h3>
             <h5>AAP</h5>
             <p>It was founded on 26 November 2012 by Arvind Kejriwal and his then-companions, following the 2011 Indian anti-corruption movement against then Indian government of Indian National Congress.</p>
          </div>
          <div className="p_card_item">
             <h3>None of The Above</h3>
             <h5>Nota</h5>
             <p>"None of the above" (NOTA), or none for short, also known as "against all" or a "scratch" vote, .</p>
          </div>
          <div className="p_card_item">
             <h3>Bjp</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptatem, maiores at enim</p>
          </div>
          <div className="p_card_item">
             <h3>Bjp</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptatem, maiores at enim</p>
          </div>
        </div>

      </section>
      
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
