"use client";

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
      <div className="py-10 px-8 container-custom grid grid-cols-4 max-sm:grid-cols-1 gap-y-4">
        <div className="flex flex-col max-sm:gap-y-8">
          <div className="flex gap-x-4 items-center sm:justify-center">
            <Link
              target="_blank"
              href="https://www.facebook.com/gwrnanoinsulation/"
              className="p-[10px] rounded-[10px] bg-primary grid place-items-center aspect-square"
            >
              <FaFacebookSquare className="text-[18px] text-white" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/gwrnanoinsulation/"
              className="p-[10px] rounded-[10px] bg-primary grid place-items-center aspect-square"
            >
              <FaInstagramSquare className="text-[18px] text-white" />
            </Link>
            <Link
              target="_blank"
              href="mailto:info@gwr-nano.com"
              className="p-[10px] rounded-[10px] bg-primary grid place-items-center aspect-square"
            >
              <TbMailOpenedFilled className="text-[18px] text-white" />
            </Link>
            <Link
              target="_blank"
              href="https://www.youtube.com/channel/UCeBSS-N1ztj4INwnHL3-NGw"
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
              className="sm:w-full sm:aspect-square object-contain"
            />
          </div>
          <Link
            href={"/uj-oldal"}
            className="text-primary hover:text-white w-fit transition-all"
          >
            Adatkezelési tájékoztató
          </Link>
        </div>
        <div></div>
        <div className="sm:col-span-2">
          <h2 className="text-white text-[22px] sm:text-end">
            {lang("Contact_Details")}
          </h2>
          <div className="mt-5 flex flex-col sm:items-end">
            <Link
              className="text-primary hover:text-white w-fit transition-all"
              href={"/contact-us"}
            >
              {lang("GWR_Nano_Ltd")}
            </Link>
            <Link
              className="text-primary hover:text-white w-fit transition-all"
              href={"/uj-oldal"}
            >
              H-1037 Budapest, Csillaghegyi út 23.
            </Link>
            <Link
              className="text-primary hover:text-white w-fit transition-all"
              href={"/uj-oldal"}
            >
              +36 30 908 2216
            </Link>
            <Link
              className="text-primary hover:text-white w-fit transition-all"
              href={"/uj-oldal"}
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
        <div className="container-custom flex max-sm:flex-col justify-between max-sm:justify-center max-sm:gap-2 items-center h-20">
          <p>{lang("Copyright_GWR_Nano_Insulation")}</p>
          <p>{lang("Powered_by_Target")}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
