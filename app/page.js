"use client";
import IntroductionSection from "./components/Sections/IntroductionSection";
import SkillsSection from "./components/Sections/SkillsSection";
import ExperienceSection from "./components/Sections/ExperienceSection";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import TargetCursor from "./components/TargetCursor";
import ProjectsSection from "./components/Sections/ProjectsSection";
import NavMenu from "./components/NavMenu";
import MobileNavMenu from "./components/MobileNavMenu";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the site is on phone
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // check on mount
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Initialize the smooth scrolling effect
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={`w-full flex flex-col relative`}>
      <Toaster position="bottom-center" reverseOrder={false} />
      {isMobile ? null : (
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      )}

      <NavMenu />
      <MobileNavMenu />

      <IntroductionSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
