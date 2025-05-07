"use client";

import Divider from "@/components/divider";
import { languages } from "@/languages";
import { useLanguages } from "@/providers/languagesProvider";
import AreasOfApplicationProduct from "./areasOfApplicationProduct";

const GWRNanoInsulationFeatures = () => {
  const { lang } = useLanguages();

  return (
    <section className="container-custom py-[104px]">
      <Divider className="mb-5" />
      <ul className="list-outside list-disc">
        <li className="leading-[1.85714285714286]">
          {lang(languages.GWR_Nano_Insulationis_so_called)}
        </li>
        <li className="leading-[1.85714285714286]">
          {lang(languages.A_unique_revolutionary)}
        </li>
      </ul>
      <div className="grid grid-cols-4 gap-x-10 gap-y-4 leading-[1.85714285714286] mt-[50px]">
        <div className="flex flex-col">
          <h4 className="text-primary text-xl">01.</h4>
          <h5 className="text-xl mt-2">{lang(languages.Heat_insulation)}</h5>
          <p className="mt-1">{lang(languages.At_least_40_energy)}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-primary text-xl">02.</h4>
          <h5 className="text-xl mt-2">{lang(languages.Fast_and_cost)}</h5>
          <p className="mt-1">{lang(languages.Three_people_can)}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-primary text-xl">03.</h4>
          <h5 className="text-xl mt-2">
            {lang(languages.Fire_resistance_and)}
          </h5>
          <p className="mt-1">{lang(languages.Fire_resistance_D_s2_d0)}</p>
          <p className="">{lang(languages.Can_be_colored)}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-primary text-xl">04.</h4>
          <h5 className="text-xl mt-2">{lang(languages.Diverse_usage)}</h5>
          <p className="">{lang(languages.The_product_can)}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-primary text-xl">05.</h4>
          <h5 className="text-xl mt-2">{lang(languages.Durable)}</h5>
          <p className="">{lang(languages.Its_lifespan_is)}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-primary text-xl">06.</h4>
          <h5 className="text-xl mt-2">{lang(languages.Weather_resistant)}</h5>
          <p className="">{lang(languages.It_protects_the)}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-primary text-xl">07.</h4>
          <h5 className="text-xl mt-2">
            {lang(languages.Enviromental_friendly)}
          </h5>
          <p className="">{lang(languages.Its_composition_does)}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-primary text-xl">08.</h4>
          <h5 className="text-xl mt-2">{lang(languages.Breathable)}</h5>
          <p className="">{lang(languages.Vapor_permeability)}</p>
        </div>
      </div>
      <div className="flex justify-between gap-10 mt-[50px]">
        <div className="flex-1 aspect-[3/2] bg-black"></div>
        <div className="flex-1 aspect-[3/2] bg-black"></div>
      </div>
    </section>
  );
};

export default GWRNanoInsulationFeatures;
