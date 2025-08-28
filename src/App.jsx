import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Landing from "./pages/Landing";
import SeekerDashboard from "./pages/SeekerDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import "./App.css";

function AppRoutes() {
  const { user } = useUser();

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/seeker-dashboard" element={<SeekerDashboard />} />
      <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
