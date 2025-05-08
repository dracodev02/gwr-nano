import { languages } from "@/languages";
import ProvideTheBestService from "@/views/product/provideTheBestService";
import ProjectsBanner from "@/views/projects/banner";
import RecentProjects from "@/views/projects/recentProjects";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - GWR Nano Insulation",
  description:
    "Projects Recent Projects Sport centers FIFA WORLD CUP STADIUMS The Solution GWR Nano “Air-conditioning system are useless without extremely efficient insulation against hot weather” “Traditional materials are bulky, and also extremely impractical for a stadium” “Q Green could easily meet its deadlines because GWR Nano was so fast and easy to apply” Case Study Residential … Projects Read More »",
  openGraph: {
    title: "Projects - GWR Nano Insulation",
    description:
      "Projects Recent Projects Sport centers FIFA WORLD CUP STADIUMS The Solution GWR Nano “Air-conditioning system are useless without extremely efficient insulation against hot weather” “Traditional materials are bulky, and also extremely impractical for a stadium” “Q Green could easily meet its deadlines because GWR Nano was so fast and easy to apply” Case Study Residential … Projects Read More »",
    url: "http://gwr-nano.com/projects",
    siteName: "GWR Nano Insulation",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "http://gwr-nano.com/wp-content/uploads/2023/04/cropped-cropped-Screenshot_20230402-142742_Chrome.jpg",
        width: 861,
        height: 374,
        alt: "GWR Nano Insulation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - GWR Nano Insulation",
    description:
      "Projects Recent Projects Sport centers FIFA WORLD CUP STADIUMS The Solution GWR Nano “Air-conditioning system are useless without extremely efficient insulation against hot weather” “Traditional materials are bulky, and also extremely impractical for a stadium” “Q Green could easily meet its deadlines because GWR Nano was so fast and easy to apply” Case Study Residential … Projects Read More »",
    images: [
      {
        url: "http://gwr-nano.com/wp-content/uploads/2023/04/cropped-cropped-Screenshot_20230402-142742_Chrome.jpg",
        width: 861,
        height: 374,
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

const ProjectsPage = () => {
  return (
    <>
      <ProjectsBanner />
      <RecentProjects />
      <ProvideTheBestService
        subTitle={languages.Our_unique_product_will}
        email="export@gwr-nano.com"
      />
    </>
  );
};

export default ProjectsPage;
