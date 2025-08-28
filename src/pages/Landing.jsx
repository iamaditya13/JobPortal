import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeSection from "../components/HomeSection";

const Landing = () => {
  const handleSearch = ({ jobTitle, location }) => {
    console.log("Search:", { jobTitle, location });
  };

  return (
    <>
      <Navbar />
      <Hero onSubmit={handleSearch} />
      <HomeSection />
    </>
  );
};

export default Landing;
