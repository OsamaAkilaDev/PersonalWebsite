import React from "react";
import ProjectCard from "../Projects/ProjectCard";

function ProjectsSection() {
  return (
    <div id="projects" className="w-full md:min-h-screen md:p-18 max-md:p-8">
      <h1 className="text-4xl font-medium md:mb-12 mb-5 text-blue-500">
        Projects
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;

const projects = [
  {
    title: "Deep CNN Image Classifier",
    desc: "Specialized in detecting Arabian oryx, using visual features unique to the species. Ideal for wildlife tracking and conservation tasks.",
    thumbnail: "/projects/oryx_project.png",
    tools: [
      { name: "Python", color: "bg-blue-400" },
      { name: "OpenCV", color: "bg-red-600" },
      { name: "TensorFlow", color: "bg-orange-400" },
    ],
  },
  {
    title: "Heart arrhythmia diagnosis AI",
    desc: "Smartphone app using two AI models, a PPG-to-ECG transformer and ECG classifier, for real-time, non-invasive detection of heart arrhythmias.",
    thumbnail: "/projects/heart_app.webp",
    tools: [
      { name: "Python", color: "bg-blue-400" },
      { name: "PyTorch", color: "bg-pink-500" },
      { name: "ReactNative", color: "bg-blue-300" },
    ],
  },
  {
    title: "Time-scheduling application",
    desc: "Provides scheduling and time management tools with AI-powered PDF extraction and time analysis to improve productivity.",
    thumbnail: "/projects/sch-app.png",
    tools: [
      { name: "React", color: "bg-blue-300" },
      { name: "Tauri", color: "bg-amber-500" },
      { name: "Express", color: "bg-white" },
      { name: "REST API", color: "bg-gray-400" },
    ],
  },
  {
    title: "Instant chatting web application",
    desc: "Web-based instant messaging app with real-time chat, user login, registration, and a sleek modern user interface.",
    thumbnail: "/projects/chat-app.png",
    tools: [
      { name: "React", color: "bg-blue-300" },
      { name: "Express", color: "bg-white" },
      { name: "Mongo", color: "bg-green-400" },
      { name: "Sockets", color: "bg-gray-300" },
    ],
  },
  {
    title: "Employee tasks dashboard",
    desc: "Track attendance, tasks, and reports with PDF export, all secured by a robust roles and permissions management system.",
    thumbnail: "/projects/employee-task-dashboard.png",
    tools: [
      { name: "PHP", color: "bg-purple-400" },
      { name: "Laravel", color: "bg-red-500" },
      { name: "MySQL", color: "bg-orange-400" },
    ],
  },
];
