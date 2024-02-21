// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import StaffPage from './Components/StaffPage';
import LeaveType from './Components/LeaveType';
import Addstaff from './Components/Addstaff';
import Leave from './Components/Leave';
import Hodhome from './Components/Hodhome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/leavetype" element={<LeaveType />} />
        <Route path="/addstaff" element={<Addstaff />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/Hodhome" element={<Hodhome />} />

      </Routes>
    </Router>
  );
}

export default App;
 