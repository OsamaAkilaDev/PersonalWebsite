import React from "react";

function SkillCategory({ skillCategory }) {
  console.log(skillCategory.skills);
  return (
    <div className="flex justify-between gap-15 max-md:gap-5 max-md:flex-col">
      <h2 className="text-5xl flex-1">{skillCategory.title}</h2>
      <div className="flex gap-x-10 gap-y-4 flex-wrap mt-2 justify-start flex-3">
        {skillCategory.skills.map((skill, i) => {
          return (
            <div className="flex gap-3 items-center" key={i}>
              <div className="h-12 w-12 flex justify-center items-center">
                {skill.logo}
              </div>
              <p className="text-3xl font-light">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillCategory;
