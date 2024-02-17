import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; // Assuming you're using react-bootstrap for styling
import Navbar from './Navbar';

const AddStaff = () => {
  // State for form fields
  const [staffId, setStaffId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [gender, setGender] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic here to handle the form submission, e.g., send data to the server
    console.log('Form submitted:', { staffId, firstName, lastName, email, department, gender, contactNumber });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflowY: 'auto' }}>
        <Navbar/>
      <h2>Add Staff</h2>
      <Form onSubmit={handleSubmit} style={{ marginTop: '150px' }}>
        <Form.Group className="mb-3" controlId="staffId">
          <Form.Label>Staff ID</Form.Label>
          <Form.Control type="text" placeholder="Enter Staff ID" value={staffId} onChange={(e) => setStaffId(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="department">
          <Form.Label>Department</Form.Label>
          <Form.Control as="select" value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            {/* Add more departments as needed */}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            {/* Add more genders as needed */}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactNumber">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="text" placeholder="Enter Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddStaff;
