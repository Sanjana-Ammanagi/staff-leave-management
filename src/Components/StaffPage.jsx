import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from './Navbar';
import './StaffPage.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function StaffPage() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Example API endpoint, replace it with your actual endpoint
    const apiUrl = 'https://example.com/api/staff';

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setRows(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  const handleAddStaff = () => {
    // Use navigate to go to the new page (replace '/new-page' with the actual path)
    navigate('/addstaff');
  };

  return (
    <div>
      <Navbar />
      <button className="add-staff-button" onClick={handleAddStaff}>
        Add Staff
      </button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Department</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.Staff_id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  backgroundColor: index % 2 === 0 ? '#bbe4e9' : 'white',
                }}
              >
                <TableCell component="th" scope="row">
                  {row.F_name} {row.L_name}
                </TableCell>
                <TableCell>{row.Email}</TableCell>
                <TableCell>{row.Department_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
