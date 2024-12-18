import Footer from "@/components/Footer";
import About from "@/components/home/About";
import Design from "@/components/home/Design";
import Hero from "@/components/home/Hero";
import React from "react";

const page = () => {
  return (
    <div className="home">
      <Hero />
      <Design />
      <About />
      <Footer />
    </div>
  );
};

export default page;
