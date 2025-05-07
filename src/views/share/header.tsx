"use client";

import { languages } from "@/languages";
import { useLanguages } from "@/providers/languagesProvider";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { TbMailOpenedFilled } from "react-icons/tb";

const Header = () => {
  const { lang, currentLanguage } = useLanguages();
  const [tabs, setTabs] = useState<{ name: string; href: string }[] | null>(
    null
  );

  useEffect(() => {
    setTabs([
      { name: lang(languages.home), href: "/" },
      { name: lang(languages.product), href: "/product" },
      { name: lang(languages.projects), href: "/projects" },
      { name: lang(languages.about_us), href: "/about" },
      { name: lang(languages.contact), href: "/contact-us" },
    ]);
  }, [currentLanguage]);

  return (
    <div className="py-4 border-b border-white/10 bg-transparent absolute top-0 left-0 w-full z-[3]">
      <div className="container-custom flex justify-between items-center">
        <div>
          <Image src="/images/logo.png" alt="logo" width={175} height={78} />
        </div>
        <div className="flex gap-x-8 items-center">
          {tabs &&
            tabs.map((tab) => (
              <Link key={tab.name} href={tab.href} className="text-white">
                {tab.name}
              </Link>
            ))}
        </div>
        <div className="flex items-center gap-8">
          <FaFacebookSquare
            width={20}
            height={20}
            className="text-xl text-white"
          />
          <FaInstagramSquare
            width={20}
            height={20}
            className="text-xl text-white"
          />
          <TbMailOpenedFilled
            width={20}
            height={20}
            className="text-xl text-white"
          />
          <FaYoutubeSquare
            width={20}
            height={20}
            className="text-xl text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
