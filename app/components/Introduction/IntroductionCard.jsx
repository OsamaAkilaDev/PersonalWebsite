import Link from "next/link";
import React from "react";

function IntroductionCard() {
  return (
    <div className="gap-7 flex flex-col fadeIn">
      <h1
        className={`text-7xl max-md:text-5xl max-w-85 font-bold text-justify tracking-wider`}
      >
        <span className="text-blue-500">Software</span> Engineer
      </h1>

      <p className="max-w-130 text-xl max-md:text-md text-gray-400">
        Hi, I'm <span className="text-blue-500">Osama Akila</span>, a passionate
        software developer with experience in{" "}
        <span className="text-blue-500 font-bold">Frontend</span>,{" "}
        <span className="text-blue-500 font-bold">Backend</span>, and{" "}
        <span className="text-blue-500 font-bold">AI</span>.<br />I build
        full-stack applications that combine clean UI, robust architecture, and
        intelligent features to deliver real-world impact.
      </p>

      <div className="flex gap-3">
        <Link
          href="https://www.linkedin.com/in/osama-akila-9a847a268/"
          target="_blank"
          className="bg-blue-500 h-12 text-xl font-ligth tracking-wide rounded-md hover:bg-blue-600 active:bg-blue-700 transition-colors cursor-target md:cursor-none flex justify-center items-center px-5"
        >
          LinkedIn
        </Link>

        <Link
          href="https://github.com/OsamaAkilaDev"
          target="_blank"
          className="bg-blue-500 h-12 text-xl font-ligth tracking-wide rounded-md hover:bg-blue-600 active:bg-blue-700 transition-colors cursor-target md:cursor-none flex justify-center items-center px-5"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
}

export default IntroductionCard;
