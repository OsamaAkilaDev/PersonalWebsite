import { firaCode } from "@/app/utils/fonts";
import React from "react";

function Quote() {
  return (
    <div
      className={`absolute bottom-8 right-10 max-w-110 hidden -z-10 opacity-70 blur-[1px] md:inline ${firaCode.className}`}
    >
      <span className="text-blue-500">{`<dialog>`}</span>
      <br />
      <p className="ml-5">
        Challenges ignite creativity, driving the creation of something new,
        meaningful, and lasting. Through overcoming obstacles, true innovation
        is shaped.
      </p>
      <span className="text-blue-500">{`</dialog>`}</span>
    </div>
  );
}

export default Quote;
