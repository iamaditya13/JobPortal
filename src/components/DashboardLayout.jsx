import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { Link } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const { user } = useUser();
  const role = user?.publicMetadata?.role;

  const seekerLinks = [
    { name: "Home", path: "/seeker-dashboard" },
    { name: "Browse Jobs", path: "/jobs" },
    { name: "Applied Jobs", path: "/applied" },
    { name: "Profile", path: "/profile" },
  ];

  const recruiterLinks = [
    { name: "Home", path: "/recruiter-dashboard" },
    { name: "Post a Job", path: "/post-job" },
    { name: "Candidates", path: "/candidates" },
    { name: "Company Profile", path: "/company-profile" },
  ];

  const navLinks = role === "seeker" ? seekerLinks : recruiterLinks;

  return (

    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">JobPortal</h2>
        <nav className="space-y-4">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="block hover:text-teal-400">{link.name}</Link>
          ))}
          <div className="mt-6 border-t border-slate-700 pt-4">
            <Link to="/settings" className="block hover:text-teal-400">Settings</Link>
          </div>
        </nav>
        <div className="mt-10 border-t border-slate-700 pt-4">
          <p className="text-sm">Signed in as</p>
          <p className="font-semibold">{user?.fullName}</p>
          <p className="text-xs text-gray-400 capitalize">{role}</p>
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};


export default DashboardLayout;