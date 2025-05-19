"use client";

import Divider from "@/components/divider";

import { useLanguages } from "@/providers/languagesProvider";
import AreasOfApplicationProduct from "./areasOfApplicationProduct";

const GWRNanoInsulationFeatures = () => {
  const { lang } = useLanguages();

  return (
    <section className="container-custom py-[104px]">
      <Divider className="mb-5" />
      <ul className="list-outside list-disc">
        <li className="leading-[1.85714285714286]">
          {lang("GWR_Nano_Insulationis_so_called")}
        </li>
        <li className="leading-[1.85714285714286]">
          {lang("A_unique_revolutionary")}
        </li>
      </ul>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-10 gap-y-4 leading-[1.85714285714286] mt-[50px]">
        <div className="flex flex-col">
          <h4 className="text-primary text-xl">01.</h4>
          <h5 className="text-xl mt-2">{lang("Heat_insulation")}</h5>
          <p className="mt-1">{lang("At_least_40_energy")}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-primary text-xl">02.</h4>
          <h5 className="text-xl mt-2">{lang("Fast_and_cost")}</h5>
          <p className="mt-1">{lang("Three_people_can")}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-primary text-xl">03.</h4>
          <h5 className="text-xl mt-2">{lang("Fire_resistance_and")}</h5>
          <p className="mt-1">{lang("Fire_resistance_D_s2_d0")}</p>
          <p className="">{lang("Can_be_colored")}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-primary text-xl">04.</h4>
          <h5 className="text-xl mt-2">{lang("Diverse_usage")}</h5>
          <p className="">{lang("The_product_can")}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-primary text-xl">05.</h4>
          <h5 className="text-xl mt-2">{lang("Durable")}</h5>
          <p className="">{lang("Its_lifespan_is")}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-primary text-xl">06.</h4>
          <h5 className="text-xl mt-2">{lang("Weather_resistant")}</h5>
          <p className="">{lang("It_protects_the")}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-primary text-xl">07.</h4>
          <h5 className="text-xl mt-2">{lang("Enviromental_friendly")}</h5>
          <p className="">{lang("Its_composition_does")}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="text-primary text-xl">08.</h4>
          <h5 className="text-xl mt-2">{lang("Breathable")}</h5>
          <p className="">{lang("Vapor_permeability")}</p>
        </div>
      </div>
      <div className="flex justify-between gap-10 mt-[50px] max-md:flex-col">
        <div className="flex-1 aspect-[3/2] bg-black"></div>
        <div className="flex-1 aspect-[3/2] bg-black"></div>
      </div>
    </section>
  );
};

export default GWRNanoInsulationFeatures;
