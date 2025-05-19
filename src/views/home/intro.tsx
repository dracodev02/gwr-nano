"use client";
import Button from "@/components/button";

import { useLanguages } from "@/providers/languagesProvider";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Intro = () => {
  const { lang } = useLanguages();

  return (
    <section className="bg-home-sec1 pt-[140px] pb-[60px] w-full relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#101218] opacity-50"></div>
      <div className="max-w-[450px] mx-auto relative z-[1] px-2 animate-fade-up">
        <h1 className="text-[39px] text-white max-md:text-center">
          {lang("gwr_nano_insulation")}
        </h1>
        <h1 className="text-white text-[29px] max-md:text-center">
          {lang("born_to")}
        </h1>
        <p className="text-grays mb-9 max-md:text-center">{lang("our_goal")}</p>
        <div className="flex items-center max-md:justify-center max-md:flex-wrap">
          <Link href={"mailto:info@gwr-nano.com"}>
            <Button
              title={lang("request_information")}
              icon={<BsArrowRight className="text-sm" />}
            />
          </Link>

          <Link
            href="/contact-us"
            className="hover:text-white text-white/80 px-8 py-4 transition-all duration-500"
          >
            <Button
              title={lang("Get_in_touch")}
              variant="outline"
              className="text-grays hover:text-white font-normal"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
