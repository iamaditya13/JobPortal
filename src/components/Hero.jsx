import React, { useState } from "react";
import { useUser, SignedIn, SignedOut } from "@clerk/clerk-react";

const Hero = ({ onSubmit }) => {
  const { user } = useUser();
  const role = user?.publicMetadata?.role;
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ jobTitle, location });
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Search, apply, and get hired.
        </h1>
        <p className="mt-3 text-gray-600">
          {role === "recruiter"
            ? "Post jobs and connect with skilled candidates."
            : "Search thousands of opportunities tailored for you."}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-3xl"
          role="search"
        >
          <div className="flex overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Job title"
              className="w-full px-4 py-3 text-sm outline-none"
              aria-label="Job title"
            />
            <span className="hidden h-10 self-center border-l border-gray-200 sm:block" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="w-full px-4 py-3 text-sm outline-none"
              aria-label="Location"
            />
            <button
              type="submit"
              className="bg-gray-900 px-5 text-sm font-semibold text-white hover:bg-gray-800"
              aria-label="Search"
            >
              Search
            </button>
          </div>
        </form>

        <SignedOut>
          <p className="mt-3 text-xs text-gray-500">
            Sign in to see personalized results.
          </p>
        </SignedOut>
      </div>
    </section>
  );
};

export default Hero;
