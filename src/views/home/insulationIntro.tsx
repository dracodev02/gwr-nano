"use client";

import Divider from "@/components/divider";
import { languages } from "@/languages";
import { useLanguages } from "@/providers/languagesProvider";
import Image from "next/image";

const InsulationIntro = () => {
  const { lang } = useLanguages();

  return (
    <section className="flex py-[104px] gap-20 items-center justify-between container-custom max-lg:flex-col">
      <div className="flex flex-col gap-y-5 flex-1">
        <h2 className="text-[40px] max-md:text-[32px] text-center">
          {lang(languages.welcome_to_the)}
        </h2>
        <Divider />
        <h4 className="text-center text-2xl max-md:text-xl">
          {lang(languages.gwr_nano_insulation)}
        </h4>
        <ul className="list-outside list-disc">
          <li className="leading-[1.85714285714286]">
            <strong>{lang(languages.gwr_nano_insulation)}</strong>{" "}
            {lang(languages.GWR_Nano_is_a)}
          </li>
          <li className="leading-[1.85714285714286]">
            {lang(languages.The_product_has)}
          </li>
          <li className="leading-[1.85714285714286]">
            <strong>{lang(languages.gwr_nano_insulation)}</strong>{" "}
            {lang(languages.drastically_reduces_material)}
          </li>
          <li className="leading-[1.85714285714286]">
            {lang(languages.This_result_in)}
          </li>
        </ul>
      </div>
      <div className="flex-1 max-lg:w-full">
        <div className="flex items-center justify-between gap-20 flex-1">
          <div className="flex-1 h-full flex items-center relative">
            <div className="absolute pl-10 pt-10 top-0 right-0 w-full h-full">
              <div className="w-full border-4 border-primary h-full"></div>
            </div>
            <Image
              src={"/images/home-sec-2.jpg"}
              alt="project"
              width={512}
              height={682}
              className="mb-20 max-md:mb-10 max-md:pr-10 relative z-[1] max-lg:w-full max-lg:h-auto max-lg:pr-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsulationIntro;
