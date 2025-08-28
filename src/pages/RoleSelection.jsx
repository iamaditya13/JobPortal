import React, { useState } from "react";
import {
  SignedIn,
  SignedOut,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {

const { user } = useUser();
const navigate = useNavigate();
const [loading, setLoading] = useState(false);

  const setRole = async (role) => {
    if (!user) return;
    try {
      setLoading(true);
      await user.update({
        publicMetadata: {
          ...(user.publicMetadata || {}),
          role,
        },
      });
      navigate(
        role === "seeker" ? "/seeker-dashboard" : "/recruiter-dashboard",
        { replace: true }
      );
    } catch (e) {
      console.error(e);
      alert("Could not save role. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
     <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

       <SignedIn>
        <div className="min-h-[70vh] flex items-center justify-center px-4">
          <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h1 className="text-2xl font-bold tracking-tight">Choose a role</h1>
            <p className="mt-2 text-gray-600">
              Select how to use the portal. This can be updated later by support if needed.
            </p>

            <div className="mt-6 grid gap-3">
              <button
                type="button"
                disabled={loading}
                onClick={() => setRole("seeker")}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70"
              >
                I’m a Seeker
              </button>
              <button
                type="button"
                disabled={loading}
                onClick={() => setRole("recruiter")}
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:opacity-70"
              >
                I’m a Recruiter
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              Choosing a role helps personalize navigation and features.
            </p>
          </div>
        </div>
      </SignedIn>
    </>
  );
};


export default RoleSelection;
