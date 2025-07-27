import React from "react";
import { firaCode, workSans } from "../utils/fonts";

function IntroductionSection() {
  return (
    <div className="w-full h-screen flex items-start justify-center md:p-18 max-md:items-center flex-col">
      <div className="gap-7 flex flex-col px-8">
        <h1
          className={`text-7xl max-md:text-5xl max-w-85  font-bold text-justify tracking-wider`}
        >
          <span className="text-blue-500">Software</span> Engineer
        </h1>

        <p className="max-w-130 text-xl max-md:text-md text-gray-400">
          Hi, I'm <span className="text-blue-500">Osama Akila</span>, a
          passionate software developer with experience in{" "}
          <span className="text-blue-500 font-bold">Frontend</span>,{" "}
          <span className="text-blue-500 font-bold">Backend</span>,{" "}
          <span className="text-blue-500 font-bold">AI</span> and . I build
          full-stack applications that combine clean UI, robust architecture,
          and intelligent features to deliver real-world impact.
        </p>

        <button className="bg-blue-500 py-4 text-xl font-medium tracking-wide rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors cursor-pointer w-50">
          Resume
        </button>
      </div>

      <p
        className={`absolute bottom-5 right-5 max-w-100 hidden md:inline ${firaCode.className}`}
      >
        <span className="text-blue-500">{`<dialog>`}</span>
        <span className="ml-8">
          Challenges ignite creativity, driving the creation of something new,
          meaningful, and lasting. Through overcoming obstacles, true innovation
          is shaped.
        </span>
        <span className="text-blue-500">{`</dialog>`}</span>
      </p>
    </div>
  );
}

export default IntroductionSection;
