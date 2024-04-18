import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import defaultimg from "../../images/avtar (2).png";

const CandidateTables = ({candidates, openConfirmation}) => {
  return (
    <div className='userisvoted' id='votenow'>
    <TableContainer  >
    <Table>
      <TableHead sx={{ backgroundColor: "#007FFF" , border:"1px solid blue"}}>
        <TableRow>
          <TableCell align='center'  sx={{color:"white",fontWeight:"bolder"}}>S.No</TableCell>
          <TableCell align='center'  sx={{color:"white",fontWeight:"bolder"}}>Logo</TableCell>
          <TableCell align='center'  sx={{color:"white",fontWeight:"bolder"}}>Party Name</TableCell>
          <TableCell align='center'  sx={{color:"white",fontWeight:"bolder"}}>Vote-Now</TableCell>
        </TableRow>
      </TableHead>
      <TableBody sx={{}}>
        {candidates.map((candidate, index) => (
          <TableRow key={index}>
            <TableCell align='center' sx={{fontSize:"18px",border:"1px solid lightcoral",fontWeight:"bolder",backgroundColor:"#FADDE1"}} >{index + 1}</TableCell>
            <TableCell sx={{backgroundColor:"#FADDE1",border:"1px solid lightcoral"}} align='center'>
              {candidate.images ? (
                <img
                  loading="lazy"
                  className="candidate_logo_votenow"
                  src={candidate.images}
                  alt="candidate_logo"
                />
              ) : (
                <img
                loading="lazy"
                  className="default_logo_votenow"
                  src={defaultimg}
                  alt="default_logo"
                />
              )}
            </TableCell>
            <TableCell align='center' sx={{fontSize:"18px",fontWeight:"bolder",letterSpacing:"1.5px",backgroundColor:"#FADDE1",border:"1px solid lightcoral"}}>{candidate.party}</TableCell>
            <TableCell align='center'sx={{backgroundColor:"#FADDE1",border:"1px solid lightcoral"}}  >
              <Button size='large' variant="contained"  onClick={() => openConfirmation(candidate)}>Vote</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  )
}

export default CandidateTables