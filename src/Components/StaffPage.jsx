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
import { useNavigate } from 'react-router-dom';

export default function StaffPage() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = 'http://localhost:3001/api/staff';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setRows(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleAddStaff = () => {
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
              <TableCell>Staff ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.staff_id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  backgroundColor: index % 2 === 0 ? '#bbe4e9' : 'white',
                }}
              >
                <TableCell>{row.staff_id}</TableCell>
                <TableCell>{row.F_name}</TableCell>
                <TableCell>{row.L_name}</TableCell>
                <TableCell>{row.Gender}</TableCell>
                <TableCell>{row.email}</TableCell>
                
                
                <TableCell>{row.contact_number}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}