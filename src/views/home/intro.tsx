"use client";
import Button from "@/components/button";
import { languages } from "@/languages";
import { useLanguages } from "@/providers/languagesProvider";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Intro = () => {
  const { lang } = useLanguages();

  return (
    <section className="bg-home-sec1 pt-[140px] pb-[60px] w-full relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#101218] opacity-50"></div>
      <div className="max-w-[450px] mx-auto relative z-[1]">
        <h1 className="text-[39px] text-white">
          {lang(languages.gwr_nano_insulation)}
        </h1>
        <h1 className="text-white text-[29px]">{lang(languages.born_to)}</h1>
        <p className="text-grays mb-9">{lang(languages.our_goal)}</p>
        <div className="flex items-center">
          <Button
            title={lang(languages.request_information)}
            icon={<BsArrowRight className="text-sm" />}
          />
          <Link
            href="/about_us"
            className="hover:text-white text-white/80 px-8 py-4 transition-all duration-500"
          >
            {lang(languages.Get_in_touch)}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
