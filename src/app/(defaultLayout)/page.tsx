import AreasOfApplication from "@/views/home/areasOfApplication";
import FrequentlyAskedQuestions from "@/views/home/frequentlyAskedQuestions";
import GetInTouchWithUs from "@/views/home/getInTouchWithUs";
import GetYourFreeConsultation from "@/views/home/getYourFreeConsultation";
import InsulationIntro from "@/views/home/insulationIntro";
import Intro from "@/views/home/intro";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - GWR Nano Insulation",
  description:
    "GWR NANO INSULATION® Born to change insulation Our goal is to provide quality, efficient energy-saving for a sustainable future.    Request information Get In Touch Welcome to the future of insulation. GWR NANO INSULATION® GWR NANO INSULATION® GWR Nano is a paint-like liquid insulating material with special properties. A unique, revolutionary solution in the construction … Home Read More »",
};

export default function Home() {
  return (
    <>
      <Intro />
      <InsulationIntro />
      <GetYourFreeConsultation />
      <AreasOfApplication />
      <GetInTouchWithUs />
      <FrequentlyAskedQuestions />
    </>
  );
}
