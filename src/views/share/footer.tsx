"use client";

import { languages } from "@/languages";
import { useLanguages } from "@/providers/languagesProvider";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { TbMailOpenedFilled } from "react-icons/tb";

const Footer = () => {
  const { lang } = useLanguages();

  return (
    <div className="bg-[#101218]">
      <div className="pt-10 px-8 container-custom grid grid-cols-4">
        <div>
          <div className="flex gap-x-4 items-center justify-center">
            <Link
              href="/"
              className="p-[10px] rounded-[10px] bg-primary grid place-items-center aspect-square"
            >
              <FaFacebookSquare className="text-[18px] text-white" />
            </Link>
            <Link
              href="/"
              className="p-[10px] rounded-[10px] bg-primary grid place-items-center aspect-square"
            >
              <FaInstagramSquare className="text-[18px] text-white" />
            </Link>
            <Link
              href="/"
              className="p-[10px] rounded-[10px] bg-primary grid place-items-center aspect-square"
            >
              <TbMailOpenedFilled className="text-[18px] text-white" />
            </Link>
            <Link
              href="/"
              className="p-[10px] rounded-[10px] bg-primary grid place-items-center aspect-square"
            >
              <FaYoutubeSquare className="text-[18px] text-white" />
            </Link>
          </div>
          <div>
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={175}
              height={78}
              className="w-full aspect-square object-contain"
            />
          </div>
          <Link
            href={"/"}
            className="text-primary hover:text-white w-fit transition-all"
          >
            Adatkezelési tájékoztató
          </Link>
        </div>
        <div></div>
        <div className="col-span-2">
          <h2 className="text-white text-[22px] text-end">
            {lang(languages.Contact_Details)}
          </h2>
          <div className="mt-5 flex flex-col items-end">
            <Link
              className="text-primary hover:text-white w-fit transition-all"
              href={"/"}
            >
              {lang(languages.GWR_Nano_Ltd)}
            </Link>
            <Link
              className="text-primary hover:text-white w-fit transition-all"
              href={"/"}
            >
              H-1037 Budapest, Csillaghegyi út 23.
            </Link>
            <Link
              className="text-primary hover:text-white w-fit transition-all"
              href={"/"}
            >
              +36 30 908 2216
            </Link>
            <Link
              className="text-primary hover:text-white w-fit transition-all"
              href={"/"}
            >
              +36 70 319 5835
            </Link>
            <Link
              className="text-primary hover:text-white w-fit transition-all"
              href={"mailto:info@gwr-nano.com"}
            >
              info@gwr-nano.com
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[#7c7d7f3d]">
        <div className="container-custom flex justify-between items-center h-20">
          <p>{lang(languages.Copyright_GWR_Nano_Insulation)}</p>
          <p>{lang(languages.Powered_by_Target)}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
