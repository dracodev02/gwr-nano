"use client";

import Divider from "@/components/divider";

import { useLanguages } from "@/providers/languagesProvider";
import Image from "next/image";
import {
  FaBuilding,
  FaFighterJet,
  FaIndustry,
  FaPallet,
  FaSnowplow,
} from "react-icons/fa";
import { GiCargoCrane } from "react-icons/gi";

const AreasOfApplication = () => {
  const { lang } = useLanguages();

  return (
    <section className="flex py-[104px] gap-20 items-center justify-between container-custom max-lg:flex-col">
      <div className="flex-1 max-lg:w-full">
        <div className="flex items-center justify-between gap-20 flex-1">
          <div className="flex-1 h-full flex items-center relative">
            <div className="absolute pl-10 pt-10 top-0 right-0 w-full h-full">
              <div className="w-full border-4 border-primary h-full"></div>
            </div>
            <Image
              src={"/images/home-sec-4.jpg"}
              alt="project"
              width={512}
              height={682}
              className="mb-20 max-md:mb-10 max-md:pr-10 relative z-[1] max-lg:w-full max-lg:h-auto max-lg:pr-20"
            />
          </div>
        </div>
        {/* <div className="relative w-fit">
          <Image
            src={"/images/home-sec-4.jpg"}
            className="relative z-[1]"
            alt="insulation"
            width={512}
            height={682}
          />
          <div className="absolute w-full h-full border-4 border-primary top-11 left-11"></div>
        </div> */}
      </div>
      <div className="flex flex-col gap-y-5 flex-1">
        <h2 className="text-[40px] max-md:text-[32px]">
          {lang("Areas_of_application")}
        </h2>
        <Divider />
        <p className="">{lang("These_are_the")}</p>
        <div className="grid grid-cols-2 gap-6 mt-9 max-md:grid-cols-1">
          <div className="flex gap-4 max-md:flex-col max-md:items-center">
            <div className="w-[32px]">
              <FaBuilding className="text-[32px] text-primary" />
            </div>
            <div>
              <h5 className="text-xl max-md:text-center">
                {lang("RESIDENTIAL_AND_COMMERCIAL")}
              </h5>
              <p className="mt-2 max-md:text-center">
                {lang("Interior_and_exterior")}
              </p>
              <p className="mt-2 max-md:text-center">
                {lang("Roofs_and_structures")}
              </p>
              <p className="mt-2 max-md:text-center">
                {lang("Air_conditioning_systems")}
              </p>
            </div>
          </div>
          <div className="flex gap-4 max-md:flex-col max-md:items-center">
            <div className="w-[32px]">
              <FaFighterJet className="text-[32px] text-primary" />
            </div>
            <div>
              <h5 className="text-xl max-md:text-center">{lang("MILITARY")}</h5>
              <p className="mt-2 max-md:text-center">
                {lang("Internal_and_external_military")}
              </p>
              <p className="mt-2 max-md:text-center">
                {lang("Military_vehicles")}
              </p>
              <p className="mt-2 max-md:text-center">
                {lang("Military_structures")}
              </p>
            </div>
          </div>
          <div className="flex gap-4 max-md:flex-col max-md:items-center">
            <div className="w-[32px]">
              <GiCargoCrane className="text-[32px] text-primary" />
            </div>
            <div>
              <h5 className="text-xl max-md:text-center">
                {lang("CIVIL_CONSTRUCTION")}
              </h5>
              <p className="mt-2 max-md:text-center">
                {lang("Lower_area_bridges")}
              </p>
              <p className="mt-2 max-md:text-center">
                {lang("Liquid_and_fluid")}
              </p>
            </div>
          </div>
          <div className="flex gap-4 max-md:flex-col max-md:items-center">
            <div className="w-[32px]">
              <FaIndustry className="text-[32px] text-primary" />
            </div>
            <div>
              <h5 className="text-xl max-md:text-center">
                {lang("INDUSTRIAL_BUILDINGS")}
              </h5>
              <p className="mt-2 max-md:text-center">
                {lang("Hangars_garages")}
              </p>
              <p className="mt-2 max-md:text-center">
                {lang("Industrial_structures")}
              </p>
              <p className="mt-2 max-md:text-center">
                {lang("Industrial_pipelines")}
              </p>
            </div>
          </div>
          <div className="flex gap-4 max-md:flex-col max-md:items-center">
            <div className="w-[32px]">
              <FaSnowplow className="text-[32px] text-primary" />
            </div>
            <div>
              <h5 className="text-xl max-md:text-center">{lang("VEHICLES")}</h5>
              <p className="mt-2 max-md:text-center">
                {lang("Extreme_weather_vehicles")}
              </p>
              <p className="mt-2 max-md:text-center">
                {lang("Industrial_vehicles")}
              </p>
              <p className="mt-2 max-md:text-center">{lang("Army_vehicles")}</p>
            </div>
          </div>
          <div className="flex gap-4 max-md:flex-col max-md:items-center">
            <div className="w-[32px]">
              <FaPallet className="text-[32px] text-primary" />
            </div>
            <div>
              <h5 className="text-xl max-md:text-center">
                {lang("INDUSTRIAL_STRUCTURE")}
              </h5>
              <p className="mt-2 max-md:text-center">
                {lang("Metal_structures")}
              </p>
              <p className="mt-2 max-md:text-center">
                {lang("Industrial_vehicles")}
              </p>
              <p className="mt-2 max-md:text-center">
                {lang("Pipeline_structures")}
              </p>
              <p className="mt-2 max-md:text-center">{lang("Water_tanks")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasOfApplication;
