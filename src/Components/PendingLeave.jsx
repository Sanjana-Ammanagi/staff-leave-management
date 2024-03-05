// PendingLeave.jsx
import React, { useState, useEffect } from 'react';
import HodNavbar from './HodNavbar';
import './PendingLeave.css'; // Import your CSS file

const PendingLeave = () => {
  const [pendingLeaveRequests, setPendingLeaveRequests] = useState([]);

  useEffect(() => {
    // Fetch pending leave requests when the component mounts
    fetchPendingLeaveRequests();
  }, []);

  const fetchPendingLeaveRequests = () => {
    // Make an API call to fetch pending leave requests
    // You can replace the URL with your actual API endpoint
    fetch('http://localhost:3001/api/pendingLeaveRequests')
      .then((response) => response.json())
      .then((data) => setPendingLeaveRequests(data))
      .catch((error) => console.error('Error fetching pending leave requests:', error));
  };

  return (
    <div>
      <HodNavbar />
      <div className="pending-leave-container">
        <h2>Pending Leave Requests</h2>
        <table className="pending-leave-table">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Staff Name</th>
              <th>Leave Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Designation</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingLeaveRequests.map((request, index) => (
              <tr key={request.leave_request_id}>
                <td>{index + 1}</td>
                <td>{`${request.F_name} ${request.L_name}`}</td>
                <td>{request.leave_type_name}</td>
                <td>{request.start_date}</td>
                <td>{request.end_date}</td>
                <td>{request.designation}</td>
                <td>Pending</td>
                <td>
                  <button className="view-button">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingLeave;