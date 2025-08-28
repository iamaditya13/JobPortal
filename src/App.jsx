import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SeekerDashboard from "./pages/SeekerDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import RoleSelection from "./pages/RoleSelection";
import "./App.css"

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/select-role" element={<RoleSelection />} />
          <Route path="/seeker-dashboard" element={<SeekerDashboard />} />
          <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
