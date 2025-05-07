"use client";

import { languages } from "@/languages";
import { useLanguages } from "@/providers/languagesProvider";

const BannerProductPage = () => {
  const { lang } = useLanguages();

  return (
    <section className="bg-product-sec1 pt-[150px] pb-[100px] w-full relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#101218] opacity-50"></div>
      <div className="container-custom relative z-[1]">
        <h1 className="text-white text-[72px]">
          {lang(languages.gwr_nano_insulation)}
        </h1>
      </div>
    </section>
  );
};

export default BannerProductPage;
