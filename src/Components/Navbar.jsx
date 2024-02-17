import React from 'react';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import LogoImage from './logo.jpeg';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleStaffClick = () => {
    navigate('/staff'); // Navigate to the /staff route
  };

  const handleLeaveTypeClick = () => {
    navigate('/leavetype'); // Navigate to the /leavetype route
  };

  return (
    <BootstrapNavbar bg="dark" variant="dark" className="navbar sticky-top">
      <Container>
        <BootstrapNavbar.Brand href="#home" className="navbar-brand">
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
          <Nav.Link href="#pricing">Leave</Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>

  );
};

export default Navbar;
