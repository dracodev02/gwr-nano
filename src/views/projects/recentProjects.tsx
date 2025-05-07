"use client";
import Button from "@/components/button";
import Divider from "@/components/divider";
import { languages } from "@/languages";
import { useLanguages } from "@/providers/languagesProvider";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FaCaretRight } from "react-icons/fa";

const RecentProjects = () => {
  const { lang } = useLanguages();
  return (
    <section className="container-custom py-[104px]">
      <h2 className="text-[40px] mb-20">{lang(languages.Recent_Projects)}</h2>
      <div className="flex flex-col gap-10">
        <div className="flex gap-20">
          <div className="flex items-center justify-between gap-20 flex-1">
            <div className="flex-1 h-full flex items-center relative">
              <div className="absolute pl-10 pt-10 top-0 right-0 w-full h-full">
                <div className="w-full border-4 border-primary h-full"></div>
              </div>
              <Image
                src={"/images/recent-projects-1.jpg"}
                alt="project"
                width={512}
                height={224}
                className="mb-20 relative z-[1]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 flex-1">
            <h4 className="text-sm -mb-3">{lang(languages.Sport_centers)}</h4>
            <h2 className="text-[40px] leading-[1.3]">
              {lang(languages.FIFA_WORLD_CUP)}
            </h2>
            <Divider />
            <p>{lang(languages.The_Solution_GWR_Nano)}</p>
            <div className="flex items-center gap-4">
              <FaCaretRight className="text-primary" />
              <p>{lang(languages.Air_conditioning_system)}</p>
            </div>
            <div className="flex items-center gap-4">
              <FaCaretRight className="text-primary" />
              <p>{lang(languages.Traditional_materials_are)}</p>
            </div>
            <div className="flex items-center gap-4">
              <FaCaretRight className="text-primary" />
              <p>{lang(languages.Q_Green_could_easily)}</p>
            </div>
            <Button
              title={lang(languages.Case_study)}
              icon={<BsArrowRight className="text-sm" />}
              className="w-fit"
            />
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-5 flex-1 justify-center">
            <h4 className="text-sm -mb-3">
              {lang(languages.Residential_Building)}
            </h4>
            <h2 className="text-[40px] leading-[1.3]">
              {lang(languages.Residential_Buildings)}
            </h2>
            <Divider />
            <ul className="list-outside list-disc">
              <li className="leading-[1.85714285714286]">
                {lang(languages.It_can_be_applied)}
              </li>
              <li className="leading-[1.85714285714286]">
                {lang(languages.Fast_construction_with)}
              </li>
              <li className="leading-[1.85714285714286]">
                {lang(languages.It_is_cost_effective)}
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between gap-20 flex-1">
            <div className="flex-1 h-full flex items-center relative">
              <div className="absolute pl-10 pt-10 top-0 right-0 w-full h-full">
                <div className="w-full border-4 border-primary h-full"></div>
              </div>
              <Image
                src={"/images/recent-projects-2.jpg"}
                alt="project"
                width={512}
                height={384}
                className="mb-20 relative z-[1]"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex items-center justify-between gap-20 flex-1">
            <div className="flex-1 h-full flex items-center relative">
              <div className="absolute pl-10 pt-10 top-0 right-0 w-full h-full">
                <div className="w-full border-4 border-primary h-full"></div>
              </div>
              <Image
                src={"/images/recent-projects-3.jpg"}
                alt="project"
                width={512}
                height={281}
                className="mb-20 relative z-[1]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 flex-1">
            <h2 className="text-[40px] leading-[1.3]">
              {lang(languages.TUV_SUD)}
            </h2>
            <Divider />

            <p>
              <strong>{lang(languages.Learn_about_our)}</strong>{" "}
              {lang(languages.In_order_to_determine)}
            </p>
            <Button
              title={lang(languages.Watch_video)}
              icon={<BsArrowRight className="text-sm" />}
              className="w-fit"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
