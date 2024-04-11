import React, { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import Chart from "react-apexcharts"

import "./dashboard.css";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BoyIcon from "@mui/icons-material/Boy";
import WomanIcon from "@mui/icons-material/Woman";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
} from "@mui/material";

const Dashboard = () => {
  const [data, setData] = useState({
    totalUser: "",
    femaleUser: "",
    maleUser: "",
    votedUsers: "",
    user: [],
  });

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!data.totalUser) {
      fetchUsers();
    }
  }, [data.totalUser]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/users");
      const userData = response.data;
      setData({
        totalUser: userData.isLength,
        femaleUser: userData.femaleUser,
        maleUser: userData.maleUser,
        votedUsers: userData.votedUsers,
        user: userData.users,
      });
    } catch (err) {
      console.error("Error fetching candidates:", err);
    }
  };

  const filteredUsers = data.user.filter((user) =>
    user.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashoard_container">
      <div className="dsh_card">
        <div className="ds_card_item">
          <PeopleAltIcon sx={{ fontSize: 40, color: "orange" }} />
          <p>{data.totalUser}</p>
          <p>Users</p>
        </div>
        <div className="ds_card_item">
          <BoyIcon sx={{ fontSize: 50, color: "lightblue" }} />
          <p>{data.maleUser}</p>
          <p>Male</p>
        </div>
        <div className="ds_card_item">
          <WomanIcon sx={{ fontSize: 50, color: "pink" }} />
          <p>{data.femaleUser}</p>
          <p>Female</p>
        </div>
        <div className="ds_card_item">
          <HowToVoteIcon sx={{ fontSize: 40, color: "lightgreen" }} />
          <p>
            {data.votedUsers} 
             {/* {data.totalUser} */}
          </p>
          <p>Voted users</p>
        </div>
      </div>
      <div className="charts">
             <div>
                <Chart
                 type="pie"
                 width={"100%"}
                 height={450}
                 series={[data.totalUser,data.maleUser,data.femaleUser,data.votedUsers]}  
                 options={{
                  title:{text:"Users PieChart"},
                  noData:{text:"Empty data"},
                  labels:["Users","Male","Female","Voted users"],
                  colors:["#FF7F50","#B0E0E6","#FBCEB1","lightgreen"]

                 }}
                >
                
                </Chart>
             </div>
      </div>
      <div className="userList">
        <TableContainer>
          <Table>
            <TableHead style={{ backgroundColor: "#00A86B", color: "white" }}>
              <TableRow >
                <TableCell className="ds_tc">S.no</TableCell>
                <TableCell className="ds_tc">Name</TableCell>
                <TableCell className="ds_tc">Email</TableCell>
                <TableCell className="ds_tc" style={{cursor:"pointer"}}>
                <Tooltip title="Search user by State" placement="top" >State</Tooltip>  
                  <TextField
                    style={{ width: "40px", height: "20px" }}
                    variant="standard"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </TableCell>
                <TableCell className="ds_tc">Voted</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ backgroundColor: "#D0F0C0" }}>
              {filteredUsers.map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="ds_tc_data">{index + 1}</TableCell>
                  <TableCell className="ds_tc_data" style={{ textTransform: "capitalize" }}>
                    {user.fname} {user.lname}
                  </TableCell>
                  <TableCell className="ds_tc_data">{user.email}</TableCell>
                  <TableCell className="ds_tc_data">{user.state}</TableCell>
                  <TableCell className="ds_tc_data" style={{backgroundColor:user.isVoted ? "":"#FA8072",textAlign: "center",color: user.isVoted ? "" : "white",}}>{user.isVoted ? "Yes" : "No"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Dashboard;
