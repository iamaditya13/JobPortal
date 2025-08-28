import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  useUser,
} from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const SeekerDashboard = () => {
  const { user } = useUser();
  const role = user?.publicMetadata?.role;

  if (role && role !== "seeker") return <Navigate to="/select-role" replace />;

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <DashboardLayout>
          <h1 className="text-2xl font-bold">Seeker Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Welcome to your job search hub 🚀
          </p>
        </DashboardLayout>
      </SignedIn>
    </>
  );
};

export default SeekerDashboard;
