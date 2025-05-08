"use client";
import Divider from "@/components/divider";
import { languages } from "@/languages";
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
        {lang(languages.Areas_of_application)}
      </h2>
      <Divider />
      <div className="grid grid-cols-3 gap-6 mt-9 max-md:grid-cols-1">
        <div className="flex gap-4 flex-col">
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
        <div className="flex gap-4 flex-col">
          <div className="w-[32px]">
            <FaIndustry className="text-[32px] text-primary" />
          </div>
          <div>
            <h5 className="text-xl">{lang(languages.INDUSTRIAL_BUILDINGS)}</h5>
            <p className="mt-2">{lang(languages.Hangars_garages)}</p>
            <p className="mt-2">{lang(languages.Industrial_structures)}</p>
            <p className="mt-2">{lang(languages.Industrial_pipelines)}</p>
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <div className="w-[32px]">
            <FaPallet className="text-[32px] text-primary" />
          </div>
          <div>
            <h5 className="text-xl">{lang(languages.INDUSTRIAL_STRUCTURE)}</h5>
            <p className="mt-2">{lang(languages.Metal_structures)}</p>
            <p className="mt-2">{lang(languages.Industrial_vehicles)}</p>
            <p className="mt-2">{lang(languages.Pipeline_structures)}</p>
            <p className="mt-2">{lang(languages.Water_tanks)}</p>
          </div>
        </div>
        <div className="flex gap-4 flex-col">
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
        <div className="flex gap-4 flex-col">
          <div className="w-[32px]">
            <GiCargoCrane className="text-[32px] text-primary" />
          </div>
          <div>
            <h5 className="text-xl">{lang(languages.CIVIL_CONSTRUCTION)}</h5>
            <p className="mt-2">{lang(languages.Lower_area_bridges)}</p>
            <p className="mt-2">{lang(languages.Liquid_and_fluid)}</p>
          </div>
        </div>
        <div className="flex gap-4 flex-col">
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
      </div>
    </section>
  );
};

export default AreasOfApplicationProduct;
