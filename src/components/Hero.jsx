import React, { useState } from "react";
import { useUser, SignedIn, SignedOut } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const Hero = ({ onSubmit }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ jobTitle, location });
  };

  const handleFindJobs = () => {
    if (user) {
      navigate("/seeker-dashboard");
    } else {
      // Trigger sign in
      document.querySelector("[data-clerk-signin]")?.click();
    }
  };

  const handlePostJobs = () => {
    if (user) {
      navigate("/recruiter-dashboard");
    } else {
      // Trigger sign in
      document.querySelector("[data-clerk-signin]")?.click();
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find your new job
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Search, apply, and get hired.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col md:flex-row max-w-2xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              <div className="flex-1">
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Job title, keywords..."
                  className="w-full px-6 py-4 text-gray-900 placeholder-gray-500 outline-none border-none text-lg"
                  aria-label="Job title"
                />
              </div>
              <div className="border-t md:border-t-0 md:border-l border-gray-200"></div>
              <div className="flex-1">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className="w-full px-6 py-4 text-gray-900 placeholder-gray-500 outline-none border-none text-lg"
                  aria-label="Location"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-gray-800 text-white font-semibold text-lg hover:bg-gray-900 transition-colors duration-200 border-t md:border-t-0 md:border-l border-gray-200"
              >
                Search
              </button>
            </div>
          </form>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleFindJobs}
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Find Jobs
            </button>
            <button
              onClick={handlePostJobs}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold text-lg rounded-lg border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Post Jobs
            </button>
          </div>

          <SignedOut>
            <p className="text-gray-500 text-sm">
              Sign in to access personalized job recommendations and post
              opportunities.
            </p>
          </SignedOut>
        </div>
      </div>
    </section>
  );
};

export default Hero;
