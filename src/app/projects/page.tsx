import { languages } from "@/languages";
import ProvideTheBestService from "@/views/product/provideTheBestService";
import ProjectsBanner from "@/views/projects/banner";
import RecentProjects from "@/views/projects/recentProjects";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - GWR Nano Insulation",
  description:
    "Projects Recent Projects Sport centers FIFA WORLD CUP STADIUMS The Solution GWR Nano “Air-conditioning system are useless without extremely efficient insulation against hot weather” “Traditional materials are bulky, and also extremely impractical for a stadium” “Q Green could easily meet its deadlines because GWR Nano was so fast and easy to apply” Case Study Residential … Projects Read More »",
};

const ProjectsPage = () => {
  return (
    <>
      <ProjectsBanner />
      <RecentProjects />
      <ProvideTheBestService subTitle={languages.Our_unique_product_will} />
    </>
  );
};

export default ProjectsPage;
