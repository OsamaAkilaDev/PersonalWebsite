import React from "react";
import SkillCategory from "../Skills/SkillCategory";
import { skillCategories } from "@/app/utils/skills";

function SkillsSection() {
  return (
    <div id="skills" className="w-full md:min-h-screen md:p-18 max-md:p-8">
      <h1 className="text-4xl font-medium md:mb-12 mb-5 text-blue-500">
        My Stack
      </h1>

      <div className="flex flex-col gap-10">
        {skillCategories.map((skillCategory, i) => {
          return <SkillCategory skillCategory={skillCategory} key={i} />;
        })}
      </div>
    </div>
  );
}

export default SkillsSection;
