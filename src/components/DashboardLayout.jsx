import React from "react";
import { useUser } from "@clerk/clerk-react";
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
    <div className="mx-auto grid min-h-[calc(100vh-56px)] max-w-6xl grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[220px,1fr]">
      <aside className="rounded-xl border border-gray-200 bg-white p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
          {role === "seeker" ? "Seeker" : "Recruiter"} Menu
        </p>
        <nav className="space-y-1">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              {l.name}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="rounded-xl border border-gray-200 bg-white p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
