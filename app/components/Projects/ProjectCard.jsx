import Image from "next/image";
import React from "react";

function ProjectCard({ project }) {
  return (
    <div className=" bg-[#1f1c1b] shadow-xl rounded-xl cursor-target flex flex-col">
      <div className="h-45 w-full rounded-t-xl">
        <Image
          alt={project.title}
          className="w-full h-full object-fill rounded-[inherit]"
          width={400}
          height={180}
          src={project.thumbnail}
        />
      </div>
      <div className="p-5 flex flex-col gap-3 grow justify-between">
        <div>
          <h2 className="text-lg font-medium mb-1">{project.title}</h2>
          <p className="font-light">{project.desc}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tools.map((tool, i) => (
            <div className={`px-2 py-[3px] rounded-sm ${tool.color}`} key={i}>
              <p className={`text-sm font-medium text-black`}>{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
