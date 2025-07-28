"use client";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import React from "react";

function NavLink({ title, href, children }) {
  gsap.registerPlugin(ScrollToPlugin);

  const scrollToElement = (target) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: target },
      ease: "power2.inOut",
    });
  };
  return (
    <button
      className="md:px-8 rounded-lg flex items-center max-md:w-50 justify-center cursor-target gap-3 max-md:justify-start max-md:h-10"
      onClick={() => scrollToElement(href)}
    >
      <div className="h-6 w-6 flex items-center justify-center">{children}</div>
      <p>{title}</p>
    </button>
  );
}
export default NavLink;
