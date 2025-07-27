import React from "react";

function ExperienceCard({ experienceInfo }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-2xl">{experienceInfo.company}</p>
      <h2 className="text-5xl">{experienceInfo.title}</h2>
      <p className="text-2xl">{experienceInfo.dates}</p>
    </div>
  );
}

export default ExperienceCard;
