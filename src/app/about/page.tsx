import { languages } from "@/languages";
import BannerAbout from "@/views/about/banner";
import OurStory from "@/views/about/ourStory";
import WhatWeOffered from "@/views/about/whatWeOffered";
import ProvideTheBestService from "@/views/product/provideTheBestService";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - GWR Nano Insulation",
  description:
    "About Us Our Story • It was used to protect products in contact with extreme cold or extreme heat. That is why the military used it to protect weapons, equipment, and buildings from extreme temperatures.• GWR Nano Insulation, using the NANO technology is made to replace the thick and complex traditional thermal insulations with a … About Us Read More »",
};

const AboutPage = () => {
  return (
    <>
      <BannerAbout />
      <OurStory />
      <WhatWeOffered />
      <ProvideTheBestService subTitle={languages.The_best_and_unique} />
    </>
  );
};

export default AboutPage;
