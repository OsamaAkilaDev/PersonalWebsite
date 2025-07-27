"use client";
import Image from "next/image";
import IntroductionSection from "./components/Sections/IntroductionSection";
import SkillsSection from "./components/Sections/SkillsSection";
import ExperienceSection from "./components/Sections/ExperienceSection";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <main className={`w-full flex flex-col`}>
      <IntroductionSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
}
