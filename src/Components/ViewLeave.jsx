import React, { useState, useEffect } from 'react';
import HodNavbar from './HodNavbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'; // Import Button component
import { useParams } from 'react-router-dom'; // Import useParams for accessing URL parameters

const ViewLeave = () => {
  // State to store data for the table
  const [arrangements, setArrangements] = useState([]);
  const [leaveBalance, setLeaveBalance] = useState(null); // State for leave balance
  const { staffId } = useParams(); // Get staffId from URL parameter

  useEffect(() => {
    // Fetch data for the table when the component mounts
    fetchArrangements();
    fetchLeaveBalance(); // Fetch leave balance
  }, []);

  // Function to fetch data for the table
  const fetchArrangements = () => {
    // Make an API call to fetch data for the table
    // Replace the URL with your actual API endpoint
    fetch(`http://localhost:3001/api/alternateArrangement/${staffId}`)
      .then((response) => response.json())
      .then((data) => setArrangements(data))
      .catch((error) => console.error('Error fetching arrangements:', error));
  };

  // Function to fetch leave balance
  const fetchLeaveBalance = () => {
    // Make an API call to fetch leave balance for the staff
    // Replace the URL with your actual API endpoint
    fetch(`http://localhost:3001/api/leaveBalance/${staffId}`)
      .then((response) => response.json())
      .then((data) => setLeaveBalance(data.balance))
      .catch((error) => console.error('Error fetching leave balance:', error));
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
                  {/* Display leave balance */}
                  <TableCell>{leaveBalance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="buttons-container">
        <Button variant="contained" color="primary" className="approve-button">
          Approve
        </Button>
        <Button variant="contained" color="secondary" className="decline-button">
          Decline
        </Button>
      </div>
    </div>
  );
};

export default ViewLeave;