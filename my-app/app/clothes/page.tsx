import React from "react";
import Navbar from "../components/Navbar/page";
import VolunteerSurvey from "./volunteerclothes/volunteerclothes";
import ClothingDonorPage from "./clothingdonor/clothingdonor";
const page = () => {
  return (
    <div>
      <Navbar />
      <VolunteerSurvey />
      <ClothingDonorPage />
    </div>
  );
};

export default page;
 