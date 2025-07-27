import Image from "next/image";
import IntroductionSection from "./components/Sections/IntroductionSection";
import SkillsSection from "./components/Sections/SkillsSection";

export default function Home() {
  return (
    <main className={`w-full flex flex-col`}>
      <IntroductionSection />
      <SkillsSection />
    </main>
  );
}
