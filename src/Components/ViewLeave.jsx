import React, { useState, useEffect } from 'react';
import HodNavbar from './HodNavbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';

const ViewLeave = () => {
  const [arrangements, setArrangements] = useState([]);
  const { staffId } = useParams();

  useEffect(() => {
    fetchArrangements();
  }, []);

  const fetchArrangements = () => {
    fetch(`http://localhost:3001/api/alternateArrangement/${staffId}`)
      .then((response) => response.json())
      .then((data) => setArrangements(data))
      .catch((error) => console.error('Error fetching arrangements:', error));
  };

  const handleApproveAll = async () => {
    try {
      // Iterate through arrangements and approve each leave request
      for (const arrangement of arrangements) {
        await fetch(`http://localhost:3001/api/approveLeave/${arrangement.leave_request_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: 'Approved' }),
        });
      }
      fetchArrangements(); // Refresh the arrangements after approval
    } catch (error) {
      console.error('Error approving leave:', error);
    }
  };

  const handleDeclineAll = async () => {
    try {
      // Iterate through arrangements and decline each leave request
      for (const arrangement of arrangements) {
        await fetch(`http://localhost:3001/api/approveLeave/${arrangement.leave_request_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: 'Declined' }),
        });
      }
      fetchArrangements(); // Refresh the arrangements after declining
    } catch (error) {
      console.error('Error declining leave:', error);
    }
  };

  return (
    <div>
      <HodNavbar />
      <h1>View Leave Details</h1>
      <div className="table-container">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Subject / Lab Name</TableCell>
                <TableCell>Class</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Alternate Faculty Name</TableCell>
                <TableCell>Leave Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arrangements.map((arrangement) => (
                <TableRow key={arrangement.arrangement_id}>
                  <TableCell>{arrangement.date}</TableCell>
                  <TableCell>{arrangement.subject_lab_name}</TableCell>
                  <TableCell>{arrangement.class}</TableCell>
                  <TableCell>{arrangement.time}</TableCell>
                  <TableCell>{arrangement.alternate_faculty_name}</TableCell>
                  <TableCell>{/* Render leave balance here */}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="button-container">
        <button onClick={handleApproveAll}>Approve</button>
        <button onClick={handleDeclineAll}>Decline</button>
      </div>
    </div>
  );
};

export default ViewLeave;
