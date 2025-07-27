import React from "react";

function ExperienceCard({ experienceInfo }) {
  return (
    <div className="flex flex-col gap-3 max-md:gap-1.5">
      <p className="text-2xl text-gray-400">{experienceInfo.company}</p>
      <h2 className="text-5xl max-md:text-3xl">{experienceInfo.title}</h2>
      <p className="text-2xl text-gray-400">{experienceInfo.dates}</p>
    </div>
  );
}

export default ExperienceCard;
