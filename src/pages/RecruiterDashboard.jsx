import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  useUser,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const RecruiterDashboard = () => {
  const { user } = useUser();
  const role = user?.publicMetadata?.role;

  if (role && role !== "recruiter")
    return <Navigate to="/select-role" replace />;

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <DashboardLayout>
          <h1 className="text-2xl font-bold">Recruiter Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Manage your job postings and candidates here 👩💻
          </p>
        </DashboardLayout>
      </SignedIn>
    </>
  );
};

export default RecruiterDashboard;
