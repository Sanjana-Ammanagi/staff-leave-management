// Navbar.jsx
import React from 'react';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import LogoImage from './logo.jpeg';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';


const HodNavbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home'); // Navigate to the /home route
  };

  const handleStaffClick = () => {
    navigate('/staff');
  };

  const handleLeaveTypeClick = () => {
    navigate('/leavetype');
  };
  const handleLeaveClick = () => {
    navigate('/leave'); // Navigate to the /leave route
  };

  return (
    <BootstrapNavbar bg="dark" variant="dark" className="navbar sticky-top">
      <Container>
        <BootstrapNavbar.Brand href="#home" className="navbar-brand" onClick={handleHomeClick}>
          <img
            alt="Your Logo"
            src={LogoImage}
            width="60"
            height="60"
            className="d-inline-block align-top rounded-circle"
          />
          {'LeaveEase'}
        </BootstrapNavbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={handleStaffClick}>Staff</Nav.Link>
          <Nav.Link onClick={handleLeaveTypeClick}>Leave Type</Nav.Link>
          <Nav.Link onClick={handleLeaveClick}>Leave</Nav.Link>
          
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default HodNavbar;