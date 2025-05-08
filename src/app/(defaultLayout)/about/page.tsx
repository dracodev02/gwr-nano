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
  openGraph: {
    title: "About Us - GWR Nano Insulation",
    description:
      "About Us Our Story • It was used to protect products in contact with extreme cold or extreme heat. That is why the military used it to protect weapons, equipment, and buildings from extreme temperatures.• GWR Nano Insulation, using the NANO technology is made to replace the thick and complex traditional thermal insulations with a … About Us Read More »",
    url: "http://gwr-nano.com/about",
    siteName: "GWR Nano Insulation",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "http://gwr-nano.com/wp-content/uploads/elementor/thumbs/astronaut-cosmonaut-space-1505150-qdly48olzz44hb8hre950jcjhdspyrpgxx9ht8kt28.jpg",
        width: 640,
        height: 720,
        alt: "GWR Nano Insulation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - GWR Nano Insulation",
    description:
      "About Us Our Story • It was used to protect products in contact with extreme cold or extreme heat. That is why the military used it to protect weapons, equipment, and buildings from extreme temperatures.• GWR Nano Insulation, using the NANO technology is made to replace the thick and complex traditional thermal insulations with a … About Us Read More »",
    images: [
      {
        url: "http://gwr-nano.com/wp-content/uploads/elementor/thumbs/astronaut-cosmonaut-space-1505150-qdly48olzz44hb8hre950jcjhdspyrpgxx9ht8kt28.jpg",
        width: 640,
        height: 720,
        alt: "GWR Nano Insulation",
      },
    ],
    creator: "@gwrnano",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

const AboutPage = () => {
  return (
    <>
      <BannerAbout />
      <OurStory />
      <WhatWeOffered />
      <ProvideTheBestService
        subTitle={languages.The_best_and_unique}
        email="export@gwr-nano.com"
      />
    </>
  );
};

export default AboutPage;
