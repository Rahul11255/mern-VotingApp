import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import defaultimg from "../../images/avtar (2).png";

const CandidateTables = ({candidates, openConfirmation}) => {
  return (
    <TableContainer  sx={{ alignItems: "center" }}>
    <Table>
      <TableHead sx={{ backgroundColor: "#007FFF" }}>
        <TableRow>
          <TableCell>No</TableCell>
          <TableCell>Logo</TableCell>
          <TableCell>Party Name</TableCell>
          <TableCell>Vote-Now</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {candidates.map((candidate, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
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
            <TableCell>{candidate.party}</TableCell>
            <TableCell>
              <Button onClick={() => openConfirmation(candidate)}>Vote</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default CandidateTables