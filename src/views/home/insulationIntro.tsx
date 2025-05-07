"use client";

import Divider from "@/components/divider";
import { languages } from "@/languages";
import { useLanguages } from "@/providers/languagesProvider";
import Image from "next/image";

const InsulationIntro = () => {
  const { lang } = useLanguages();

  return (
    <section className="flex py-[104px] gap-20 items-center justify-between container-custom">
      <div className="flex flex-col gap-y-5 flex-1">
        <h2 className="text-[40px] text-center">
          {lang(languages.welcome_to_the)}
        </h2>
        <Divider />
        <h4 className="text-center text-2xl">
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
      <div className="flex-1">
        <div className="relative w-fit">
          <Image
            src={"/images/home-sec-2.jpg"}
            className="relative z-[1]"
            alt="insulation"
            width={512}
            height={682}
          />
          <div className="absolute w-full h-full border-4 border-primary top-11 left-11"></div>
        </div>
      </div>
    </section>
  );
};

export default InsulationIntro;
