"use client";

import { useLanguages } from "@/providers/languagesProvider";

const BannerProductPage = () => {
  const { lang } = useLanguages();

  return (
    <section className="bg-product-sec1 pt-[150px] pb-[100px] w-full relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#101218] opacity-50"></div>
      <div className="container-custom relative z-[1] animate-fade-right">
        <h1 className="text-white text-[72px] max-md:text-[48px] max-sm:text-[36px] max-md:text-center px-2">
          {lang("gwr_nano_insulation")}
        </h1>
      </div>
    </section>
  );
};

export default BannerProductPage;
