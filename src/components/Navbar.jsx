import React from "react";
import { Link } from "react-router-dom";
import {
  useUser,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const { user } = useUser();
  const role = user?.publicMetadata?.role;

  return (
    <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="font-extrabold tracking-tight text-gray-900">
          JOB PORTAL
        </Link>

        <nav className=" flex items-center gap-6 text-sm font-medium text-gray-700 md:flex">
          <a className="hover:text-gray-900" href="#about">
            About
          </a>
          <a className="hover:text-gray-900" href="#companies">
            Companies
          </a>
          <a className="hover:text-gray-900" href="#contact">
            Contact
          </a>
          {role === "seeker" && (
            <Link to="/jobs" className="hover:text-gray-900">
              Browse Jobs
            </Link>
          )}
          {role === "recruiter" && (
            <Link to="/post-job" className="hover:text-gray-900">
              Post Job
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-3">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium hover:bg-gray-50">
                Login | Signup
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{ elements: { userButtonAvatarBox: "w-8 h-8" } }}
            />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
