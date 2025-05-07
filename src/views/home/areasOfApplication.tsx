"use client";

import Divider from "@/components/divider";
import { languages } from "@/languages";
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
    <section className="flex py-[104px] gap-20 items-center justify-between container-custom">
      <div className="flex-1">
        <div className="relative w-fit">
          <Image
            src={"/images/home-sec-4.jpg"}
            className="relative z-[1]"
            alt="insulation"
            width={512}
            height={682}
          />
          <div className="absolute w-full h-full border-4 border-primary top-11 left-11"></div>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 flex-1">
        <h2 className="text-[40px]">{lang(languages.Areas_of_application)}</h2>
        <Divider />
        <p className="">{lang(languages.These_are_the)}</p>
        <div className="grid grid-cols-2 gap-6 mt-9">
          <div className="flex gap-4">
            <div className="w-[32px]">
              <FaBuilding className="text-[32px] text-primary" />
            </div>
            <div>
              <h5 className="text-xl">
                {lang(languages.RESIDENTIAL_AND_COMMERCIAL)}
              </h5>
              <p className="mt-2">{lang(languages.Interior_and_exterior)}</p>
              <p className="mt-2">{lang(languages.Roofs_and_structures)}</p>
              <p className="mt-2">{lang(languages.Air_conditioning_systems)}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[32px]">
              <FaFighterJet className="text-[32px] text-primary" />
            </div>
            <div>
              <h5 className="text-xl">{lang(languages.MILITARY)}</h5>
              <p className="mt-2">
                {lang(languages.Internal_and_external_military)}
              </p>
              <p className="mt-2">{lang(languages.Military_vehicles)}</p>
              <p className="mt-2">{lang(languages.Military_structures)}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[32px]">
              <GiCargoCrane className="text-[32px] text-primary" />
            </div>
            <div>
              <h5 className="text-xl">{lang(languages.CIVIL_CONSTRUCTION)}</h5>
              <p className="mt-2">{lang(languages.Lower_area_bridges)}</p>
              <p className="mt-2">{lang(languages.Liquid_and_fluid)}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[32px]">
              <FaIndustry className="text-[32px] text-primary" />
            </div>
            <div>
              <h5 className="text-xl">
                {lang(languages.INDUSTRIAL_BUILDINGS)}
              </h5>
              <p className="mt-2">{lang(languages.Hangars_garages)}</p>
              <p className="mt-2">{lang(languages.Industrial_structures)}</p>
              <p className="mt-2">{lang(languages.Industrial_pipelines)}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[32px]">
              <FaSnowplow className="text-[32px] text-primary" />
            </div>
            <div>
              <h5 className="text-xl">{lang(languages.VEHICLES)}</h5>
              <p className="mt-2">{lang(languages.Extreme_weather_vehicles)}</p>
              <p className="mt-2">{lang(languages.Industrial_vehicles)}</p>
              <p className="mt-2">{lang(languages.Army_vehicles)}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-[32px]">
              <FaPallet className="text-[32px] text-primary" />
            </div>
            <div>
              <h5 className="text-xl">
                {lang(languages.INDUSTRIAL_STRUCTURE)}
              </h5>
              <p className="mt-2">{lang(languages.Metal_structures)}</p>
              <p className="mt-2">{lang(languages.Industrial_vehicles)}</p>
              <p className="mt-2">{lang(languages.Pipeline_structures)}</p>
              <p className="mt-2">{lang(languages.Water_tanks)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasOfApplication;
