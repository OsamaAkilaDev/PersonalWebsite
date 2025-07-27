import Image from "next/image";
import IntroductionSection from "./components/IntroductionSection";

export default function Home() {
  return (
    <main className={`w-full h-auto flex flex-col `}>
      <IntroductionSection />
    </main>
  );
}
