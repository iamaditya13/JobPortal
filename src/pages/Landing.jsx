import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Landing = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4">
        <Hero />
      </main>
    </>
  );
};

export default Landing;
