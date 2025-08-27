import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SeekerDashboard from "./pages/SeekerDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import "./App.css"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/seeker-dashboard" element={<SeekerDashboard/>}/>
        <Route path="/recruiter-dashboard" element={<RecruiterDashboard/>}/>
      </Routes>
    </Router>
 );
};

export default App;
