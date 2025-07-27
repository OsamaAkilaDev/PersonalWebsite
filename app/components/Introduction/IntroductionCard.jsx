import React from "react";

function IntroductionCard() {
  return (
    <div className="gap-7 flex flex-col">
      <h1
        className={`text-7xl max-md:text-5xl max-w-85  font-bold text-justify tracking-wider`}
      >
        <span className="text-blue-500">Software</span> Engineer
      </h1>

      <p className="max-w-130 text-xl max-md:text-md text-gray-400">
        Hi, I'm <span className="text-blue-500">Osama Akila</span>, a passionate
        software developer with experience in{" "}
        <span className="text-blue-500 font-bold">Frontend</span>,{" "}
        <span className="text-blue-500 font-bold">Backend</span>, and{" "}
        <span className="text-blue-500 font-bold">AI</span>. I build full-stack
        applications that combine clean UI, robust architecture, and intelligent
        features to deliver real-world impact.
      </p>

      <button className="bg-blue-500 py-3.5 text-xl font-medium tracking-wide rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors cursor-pointer w-40">
        Resume
      </button>
    </div>
  );
}

export default IntroductionCard;
