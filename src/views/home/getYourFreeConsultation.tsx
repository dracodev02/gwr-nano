"use client";
import Button from "@/components/button";
import Divider from "@/components/divider";

import { useLanguages } from "@/providers/languagesProvider";
import Link from "next/link";

const GetYourFreeConsultation = () => {
  const { lang } = useLanguages();

  return (
    <section className="bg-home-sec3 py-[104px] bg-transparent relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#101218] opacity-50"></div>
      <div className="flex flex-col items-center container-custom gap-5 relative z-[1]">
        <Divider />
        <h2 className="text-white text-[40px] max-md:text-[32px] max-md:text-center">
          {lang("Get_Your_Free")}
        </h2>
        <p className="text-white/80">{lang("Get_all_the")}</p>
        <Link href={"/"}>
          <Button className="mt-4" title={lang("Click_here")} />
        </Link>
      </div>
    </section>
  );
};

export default GetYourFreeConsultation;
