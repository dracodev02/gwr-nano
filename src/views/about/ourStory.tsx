"use client";
import Divider from "@/components/divider";
import { languages } from "@/languages";
import { useLanguages } from "@/providers/languagesProvider";
import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";

const OurStory = () => {
  const { lang } = useLanguages();

  return (
    <section className="bg-white py-[104px]">
      <div className="container-custom">
        <div className="flex gap-20 max-lg:flex-col">
          <div className="flex items-center justify-between gap-20 flex-1">
            <div className="flex-1 h-full flex items-center relative">
              <div className="absolute pl-10 pt-10 top-0 right-0 w-full h-full">
                <div className="w-full border-4 border-primary h-full"></div>
              </div>
              <Image
                src={"/images/bg-about-sec-2.jpg"}
                alt="project"
                width={512}
                height={602}
                className="max-md:pb-5 max-md:pr-5 pb-10 pr-10 relative z-[1] max-lg:w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 flex-1 justify-center">
            <h2 className="text-[40px] max-md:text-[32px] leading-[1.3]">
              {lang(languages.Our_Story)}
            </h2>
            <Divider />
            <ul className="list-outside list-disc">
              <li className="leading-[1.85714285714286]">
                {lang(languages.It_was_used_to)}
              </li>
              <li className="leading-[1.85714285714286]">
                {lang(languages.GWR_Nano_Insulation_using)}
              </li>
              <li className="leading-[1.85714285714286]">
                {lang(languages.This_results_in_better)}
              </li>
            </ul>
            <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 aspect-square">
                  <BsFillCheckCircleFill className="text-primary text-base" />
                </div>
                <p className="font-bold">{lang(languages["78_vapor"])}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 aspect-square">
                  <BsFillCheckCircleFill className="text-primary text-base" />
                </div>
                <p className="font-bold">
                  {lang(languages["20_years_guarantee"])}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 aspect-square">
                  <BsFillCheckCircleFill className="text-primary text-base" />
                </div>
                <p className="font-bold">
                  {lang(languages.Working_operation_range)}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 aspect-square">
                  <BsFillCheckCircleFill className="text-primary text-base" />
                </div>
                <p className="font-bold">
                  {lang(languages.It_does_not_contain)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
