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
import { HiMenu, HiX } from "react-icons/hi";

interface HeaderProps {
  mode?: "transparent" | "white";
}

const Header: React.FC<HeaderProps> = ({ mode = "transparent" }) => {
  const { lang, currentLanguage } = useLanguages();
  const [tabs, setTabs] = useState<{ name: string; href: string }[] | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setTabs([
      { name: lang(languages.home), href: "/" },
      { name: lang(languages.product), href: "/product" },
      { name: lang(languages.projects), href: "/projects" },
      { name: lang(languages.about_us), href: "/about" },
      { name: lang(languages.contact), href: "/contact-us" },
    ]);
  }, [currentLanguage]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`py-4 border-b border-gray-200 absolute top-0 left-0 w-full z-[3] ${
        mode === "white" && "bg-white"
      }`}
    >
      <div className="container-custom flex justify-between items-center px-4">
        {/* Logo */}
        <Link href={"/"} className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={175}
            height={78}
            className="w-[120px] sm:w-[175px]"
          />
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex gap-x-8 items-center">
          {tabs &&
            tabs.map((tab, index) => (
              <div key={tab.name} className="flex items-center">
                <Link
                  href={tab.href}
                  className={`transition-colors  ${
                    mode === "white"
                      ? "text-primary/90 hover:text-primary"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  {tab.name}
                </Link>
              </div>
            ))}
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            target="_blank"
            href="https://www.facebook.com/gwrnanoinsulation/"
            className={`transition-colors  ${
              mode === "white"
                ? "text-primary/90 hover:text-primary"
                : "text-white hover:text-gray-200"
            }`}
          >
            <FaFacebookSquare className="text-xl" />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/gwrnanoinsulation/"
            className={`transition-colors  ${
              mode === "white"
                ? "text-primary/90 hover:text-primary"
                : "text-white hover:text-gray-200"
            }`}
          >
            <FaInstagramSquare className="text-xl" />
          </Link>
          <Link
            target="_blank"
            href="mailto:info@gwr-nano.com"
            className={`transition-colors  ${
              mode === "white"
                ? "text-primary/90 hover:text-primary"
                : "text-white hover:text-gray-200"
            }`}
          >
            <TbMailOpenedFilled className="text-xl" />
          </Link>
          <Link
            target="_blank"
            href="https://www.youtube.com/channel/UCeBSS-N1ztj4INwnHL3-NGw"
            className={`transition-colors  ${
              mode === "white"
                ? "text-primary/90 hover:text-primary"
                : "text-white hover:text-gray-200"
            }`}
          >
            <FaYoutubeSquare className="text-xl" />
          </Link>
        </div>

        {/* Hamburger Menu Button - Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6 text-primary" />
            ) : (
              <HiMenu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200">
          <div className="container-custom px-4 py-4">
            {/* Navigation Links - Mobile */}
            <div className="flex flex-col">
              {tabs &&
                tabs.map((tab) => (
                  <Link
                    key={tab.name}
                    href={tab.href}
                    className="text-gray-800 py-2 hover:text-gray-600 transition-colors border-b border-gray-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {tab.name}
                  </Link>
                ))}
            </div>

            {/* Social Icons - Mobile */}
            <div className="flex gap-6 mt-4">
              <a href="#" className="text-gray-800 hover:text-gray-600">
                <FaFacebookSquare className="text-xl" />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                <FaInstagramSquare className="text-xl" />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                <TbMailOpenedFilled className="text-xl" />
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                <FaYoutubeSquare className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
