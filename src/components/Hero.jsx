import React,{useState} from 'react';
import { useUser, SignedIn, SignedOut } from '@clerk/clerk-react';

const Hero = () => {
  const {user} = useUser();
  const role = user?.publicMetadata?.role;
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");  

  return (
    <div className="flex flex-col items-center text-center mt-20 px-6">
      <SignedOut>
        <h1 className="text-5xl font-bold">Find your new job</h1>
        <p className="text-lg text-gray-600">Search, apply, and get hired.</p>
      </SignedOut>

       <SignedIn>
        {role === "seeker" && (
          <>
            <h1 className="text-5xl font-bold">Find your next job</h1>
            <p className="text-lg text-gray-600">Search thousands of opportunities tailored for you.</p>
          </>
        )}
        {role === "recruiter" && (
          <>
            <h1 className="text-5xl font-bold">Hire top talent</h1>
            <p className="text-lg text-gray-600">Post jobs and connect with skilled candidates.</p>
          </>
        )}
      </SignedIn>

      {role === "seeker" && (
        <div className="flex w-full max-w-2xl mt-6">
          <input type="text" placeholder="Job title"
            value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}
            className="border px-4 py-2 flex-1 rounded-l-md" />
          <input type="text" placeholder="Location"
            value={location} onChange={(e) => setLocation(e.target.value)}
            className="border px-4 py-2 flex-1" />
          <button className="bg-teal-500 text-white px-6 py-2 rounded-r-md">Search</button>
        </div>
      )}

      <SignedOut>
        <button className="nav-btn mt-6">Get Started</button>
      </SignedOut>
      <SignedIn>
        {role === "seeker" && <button className="nav-btn mt-6">Browse Jobs</button>}
        {role === "recruiter" && <button className="nav-btn mt-6">Post a Job</button>}
      </SignedIn>

    </div>
  );
};

export default Hero;