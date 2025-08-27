import React from 'react';
import { useUser, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const {user} = useUser();
  const role = user?.publicMetadata?.role;

  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-md">
      <div className="font-bold text-2xl text-slate-900">
        <Link to="/"> JOB PORTAL</Link>
      </div>

      <ul className="flex gap-8 text-lg items-center">
        <li>
          <Link to="/" className="hover:text-teal-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-teal-500">
            About
          </Link>
        </li>
        <li>
          <Link to="/companies" className="hover:text-teal-500">
            Companies
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-teal-500">
            Contact
          </Link>
        </li>

        <SignedIn>
          {role === "seeker" && (
            <li>
              <Link to="/jobs" className="nav-btn">
                Browse Jobs
              </Link>
            </li>
          )}
          {role === "recruiter" && (
            <li>
              <Link to="/post-job" className="nav-btn">
                Post Job
              </Link>
            </li>
          )}
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <button className="nav-btn">Login / Signup</button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </ul>
    </nav>
  );
}

export default Navbar;