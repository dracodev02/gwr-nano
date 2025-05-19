"use client";
import Button from "@/components/button";
import Divider from "@/components/divider";

import { useLanguages } from "@/providers/languagesProvider";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaCaretRight } from "react-icons/fa";

const RecentProjects = () => {
  const { lang } = useLanguages();
  return (
    <section className="container-custom py-[104px]">
      <h2 className="text-[40px] max-md:text-[32px] mb-20">
        {lang("Recent_Projects")}
      </h2>
      <div className="flex flex-col gap-10 max-md:gap-20">
        <div className="flex gap-20 max-md:gap-10 max-lg:flex-col">
          <div className="flex items-center justify-between gap-20 flex-1">
            <div className="flex-1 h-full flex items-center relative">
              <div className="absolute pl-10 pt-10 top-0 right-0 w-full h-full max-md:pl-5 max-md:pt-5">
                <div className="w-full border-4 border-primary h-full"></div>
              </div>
              <Image
                src={"/images/recent-projects-1.jpg"}
                alt="project"
                width={512}
                height={224}
                className="max-md:pb-5 max-md:pr-5 pb-10 pr-10 relative z-[1] max-lg:w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 flex-1">
            <h4 className="text-sm -mb-3">{lang("Sport_centers")}</h4>
            <h2 className="text-[40px] max-md:text-[32px] leading-[1.3]">
              {lang("FIFA_WORLD_CUP")}
            </h2>
            <Divider />
            <p>{lang("The_Solution_GWR_Nano")}</p>
            <div className="flex items-center gap-4">
              <FaCaretRight className="text-primary" />
              <p>{lang("Air_conditioning_system")}</p>
            </div>
            <div className="flex items-center gap-4">
              <FaCaretRight className="text-primary" />
              <p>{lang("Traditional_materials_are")}</p>
            </div>
            <div className="flex items-center gap-4">
              <FaCaretRight className="text-primary" />
              <p>{lang("Q_Green_could_easily")}</p>
            </div>
            <Link
              href={
                "https://drive.google.com/file/d/1emrCSlKlhGbFcU2xVb80VLu1Ctb-arTC/view"
              }
            >
              <Button
                title={lang("Case_study")}
                icon={<BsArrowRight className="text-sm" />}
                className="w-fit"
              />
            </Link>
          </div>
        </div>
        <div className="flex gap-20 max-md:gap-10 max-lg:flex-col-reverse">
          <div className="flex flex-col gap-5 flex-1 justify-center">
            <h4 className="text-sm -mb-3">{lang("Residential_Building")}</h4>
            <h2 className="text-[40px] max-md:text-[32px] leading-[1.3]">
              {lang("Residential_Buildings")}
            </h2>
            <Divider />
            <ul className="list-outside list-disc">
              <li className="leading-[1.85714285714286]">
                {lang("It_can_be_applied")}
              </li>
              <li className="leading-[1.85714285714286]">
                {lang("Fast_construction_with")}
              </li>
              <li className="leading-[1.85714285714286]">
                {lang("It_is_cost_effective")}
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between gap-20 flex-1">
            <div className="flex-1 h-full flex items-center relative">
              <div className="absolute pl-10 pt-10 top-0 right-0 w-full h-full max-md:pl-5 max-md:pt-5">
                <div className="w-full border-4 border-primary h-full"></div>
              </div>
              <Image
                src={"/images/recent-projects-2.jpg"}
                alt="project"
                width={512}
                height={384}
                className="max-md:pb-5 max-md:pr-5 pb-10 pr-10 relative z-[1] max-lg:w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-20 max-md:gap-10 max-lg:flex-col">
          <div className="flex items-center justify-between gap-20 flex-1">
            <div className="flex-1 h-full flex items-center relative">
              <div className="absolute pl-10 pt-10 top-0 right-0 w-full h-full max-md:pl-5 max-md:pt-5">
                <div className="w-full border-4 border-primary h-full"></div>
              </div>
              <Image
                src={"/images/recent-projects-3.jpg"}
                alt="project"
                width={512}
                height={281}
                className="max-md:pb-5 max-md:pr-5 pb-10 pr-10 relative z-[1] max-lg:w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 flex-1">
            <h2 className="text-[40px] max-md:text-[32px] leading-[1.3]">
              {lang("TUV_SUD")}
            </h2>
            <Divider />

            <p>
              <strong>{lang("Learn_about_our")}</strong>{" "}
              {lang("In_order_to_determine")}
            </p>
            <Link href={"https://www.youtube.com/watch?v=pW4BwziuI1c"}>
              <Button
                title={lang("Watch_video")}
                icon={<BsArrowRight className="text-sm" />}
                className="w-fit"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
