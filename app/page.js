import Image from "next/image";
import IntroductionSection from "./components/Sections/IntroductionSection";
import SkillsSection from "./components/Sections/SkillsSection";
import ExperienceSection from "./components/Sections/ExperienceSection";

export default function Home() {
  return (
    <main className={`w-full flex flex-col`}>
      <IntroductionSection />
      <SkillsSection />
      <ExperienceSection />
    </main>
  );
}
