import React from "react";
import ExperienceCard from "../Experience/ExperienceCard";

function ExperienceSection() {
  const experiences = [
    {
      company: "Nattiq Technologies",
      title: "Frontend Developer - Internship",
      dates: "01/2025 - 03/2025",
    },
    {
      company: "Smart Link Software House",
      title: "FullStack Engineer - Internship",
      dates: "03/2025 - 05/2025",
    },
  ];

  return (
    <div id="exp" className="w-full min-h-screen md:p-18 max-md:p-8">
      <h1 className="text-4xl font-medium mb-12 text-blue-500">Experience</h1>
      <div className="flex flex-col gap-12">
        {experiences.map((exp, i) => {
          return <ExperienceCard experienceInfo={exp} key={i} />;
        })}
      </div>
    </div>
  );
}

export default ExperienceSection;
