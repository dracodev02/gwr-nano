"use client";

import Button from "@/components/button";
import Divider from "@/components/divider";
import { languages } from "@/languages";
import { useLanguages } from "@/providers/languagesProvider";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const WhatWeOffered = () => {
  const { lang } = useLanguages();

  return (
    <section className="container-custom py-[104px] flex flex-col gap-4">
      <h2 className="text-center text-[40px] max-md:text-[32px]">
        {lang(languages.What_We_Offer)}
      </h2>
      <Divider />
      <p className="mb-4 lg:mr-[56%]">
        {lang(languages.A_unique_revolutionary_solution)}
      </p>
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
        <div className="shadow-[0_0_10px_0_rgba(0,0,0,0.2)] flex flex-col rounded-lg overflow-hidden">
          <Image
            src={"/images/bg-what-we-offer-1.jpg"}
            alt="project"
            width={512}
            height={192}
            className="h-[192px] object-contain max-md:w-full max-md:h-auto"
          />
          <div className="p-8 flex flex-col gap-5 justify-between flex-1">
            <div>
              <h3 className="text-2xl max-md:text-xl">
                {lang(languages.We_Understand_Requirements)}
              </h3>
              <p>{lang(languages.Read_about_GWR_Nano)}</p>
            </div>
            <Link href="/projects" className="w-fit">
              <Button
                variant="outline"
                title={lang(languages.Learn_more)}
                icon={<BsArrowRight />}
              />
            </Link>
          </div>
        </div>
        <div className="bg-white flex flex-col rounded-lg overflow-hidden">
          <Image
            src={"/images/bg-what-we-offer-2.png"}
            alt="project"
            width={512}
            height={192}
            className="h-[192px] object-contain max-md:w-full max-md:h-auto"
          />
          <div className="p-8 flex flex-col gap-5 justify-between flex-1">
            <div>
              <h3 className="text-2xl max-md:text-xl">
                {lang(languages.Outstanding_in_the)}
              </h3>
              <p>{lang(languages.Continuous_product_development)}</p>
            </div>
            <Link
              href="https://drive.google.com/file/d/1pZo-4Tp4QvNMgzqMcIi07DKp_Tq-aas-/view"
              className="w-fit"
            >
              <Button
                variant="outline"
                title={lang(languages.Learn_more)}
                icon={<BsArrowRight />}
              />
            </Link>
          </div>
        </div>
        <div className="shadow-[0_0_10px_0_rgba(0,0,0,0.2)] flex flex-col rounded-lg overflow-hidden">
          <Image
            src={"/images/bg-what-we-offer-3.jpg"}
            alt="project"
            width={512}
            height={192}
            className="h-[192px] object-contain max-md:w-full max-md:h-auto"
          />
          <div className="p-8 flex flex-col gap-5 justify-between flex-1">
            <div>
              <h3 className="text-2xl max-md:text-xl">
                {lang(languages.Constructional_service)}
              </h3>
              <p>{lang(languages.We_provide_our_service)}</p>
            </div>
            <Link href="/product" className="w-fit">
              <Button
                variant="outline"
                title={lang(languages.Learn_more)}
                icon={<BsArrowRight />}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffered;
