"use client";
import Divider from "@/components/divider";

import { useLanguages } from "@/providers/languagesProvider";
import {
  FaBuilding,
  FaFighterJet,
  FaIndustry,
  FaPallet,
  FaSnowplow,
} from "react-icons/fa";
import { GiCargoCrane } from "react-icons/gi";

const AreasOfApplicationProduct = () => {
  const { lang } = useLanguages();

  return (
    <section className="container-custom flex flex-col pb-[104px]">
      <h2 className="text-[40px] max-md:text-[32px] mb-5">
        {lang("Areas_of_application")}
      </h2>
      <Divider />
      <div className="grid grid-cols-3 gap-6 mt-9 max-md:grid-cols-1">
        <div className="flex gap-4 flex-col">
          <div className="w-[32px]">
            <FaBuilding className="text-[32px] text-primary" />
          </div>
          <div>
            <h5 className="text-xl">{lang("RESIDENTIAL_AND_COMMERCIAL")}</h5>
            <p className="mt-2">{lang("Interior_and_exterior")}</p>
            <p className="mt-2">{lang("Roofs_and_structures")}</p>
            <p className="mt-2">{lang("Air_conditioning_systems")}</p>
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <div className="w-[32px]">
            <FaIndustry className="text-[32px] text-primary" />
          </div>
          <div>
            <h5 className="text-xl">{lang("INDUSTRIAL_BUILDINGS")}</h5>
            <p className="mt-2">{lang("Hangars_garages")}</p>
            <p className="mt-2">{lang("Industrial_structures")}</p>
            <p className="mt-2">{lang("Industrial_pipelines")}</p>
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <div className="w-[32px]">
            <FaPallet className="text-[32px] text-primary" />
          </div>
          <div>
            <h5 className="text-xl">{lang("INDUSTRIAL_STRUCTURE")}</h5>
            <p className="mt-2">{lang("Metal_structures")}</p>
            <p className="mt-2">{lang("Industrial_vehicles")}</p>
            <p className="mt-2">{lang("Pipeline_structures")}</p>
            <p className="mt-2">{lang("Water_tanks")}</p>
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <div className="w-[32px]">
            <FaFighterJet className="text-[32px] text-primary" />
          </div>
          <div>
            <h5 className="text-xl">{lang("MILITARY")}</h5>
            <p className="mt-2">{lang("Internal_and_external_military")}</p>
            <p className="mt-2">{lang("Military_vehicles")}</p>
            <p className="mt-2">{lang("Military_structures")}</p>
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <div className="w-[32px]">
            <GiCargoCrane className="text-[32px] text-primary" />
          </div>
          <div>
            <h5 className="text-xl">{lang("CIVIL_CONSTRUCTION")}</h5>
            <p className="mt-2">{lang("Lower_area_bridges")}</p>
            <p className="mt-2">{lang("Liquid_and_fluid")}</p>
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <div className="w-[32px]">
            <FaSnowplow className="text-[32px] text-primary" />
          </div>
          <div>
            <h5 className="text-xl">{lang("VEHICLES")}</h5>
            <p className="mt-2">{lang("Extreme_weather_vehicles")}</p>
            <p className="mt-2">{lang("Industrial_vehicles")}</p>
            <p className="mt-2">{lang("Army_vehicles")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasOfApplicationProduct;
