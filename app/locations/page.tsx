import Footer from "@/components/Footer";
import Locations from "@/components/locations/Locations";
import React from "react";

const page = () => {
  return (
    <div className="location">
      <Locations />
      <Footer />
    </div>
  );
};

export default page;
