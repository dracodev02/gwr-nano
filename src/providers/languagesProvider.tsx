"use client";

import Button from "@/components/button";
import { ILanguageSupported } from "@/languages";
import {
  getCookieLanguage,
  saveCookieLanguage,
} from "@/thirdPartyConfig/cookies";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

type LanguagesProps = {
  currentLanguage: keyof ILanguageSupported;
  setCurrentLanguage: Dispatch<SetStateAction<keyof ILanguageSupported>>;
  lang: (wordRepresentative: ILanguageSupported) => string;
};

const Languages = createContext<LanguagesProps | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

export const LanguagesProvider = (props: Props) => {
  const { children } = props;

  const [currentLanguage, setCurrentLanguage] =
    useState<keyof ILanguageSupported>("VI");
  const keys: (keyof ILanguageSupported)[] = ["EN", "VI"];

  const [isOpen, setIsOpen] = useState(false);

  const lang = (wordRepresentative: ILanguageSupported): string => {
    const item = wordRepresentative[currentLanguage];
    if (!item) return "No translation found";
    return item;
  };

  const mappingFlag = (language: keyof ILanguageSupported): string => {
    switch (language) {
      case "EN":
        return "en-flag";
      case "VI":
        return "vi-flag";
      default:
        return "en-flag";
    }
  };

  const value = {
    currentLanguage,
    setCurrentLanguage,
    lang,
  };

  useEffect(() => {
    const language = getCookieLanguage();
    if (keys.includes(language)) {
      setCurrentLanguage(language);
    } else {
      setCurrentLanguage("VI");
      saveCookieLanguage("VI");
    }
  }, []);

  useEffect(() => {
    saveCookieLanguage(currentLanguage);
  }, [currentLanguage]);

  return (
    <Languages.Provider value={value}>
      <div className="fixed bottom-0 left-4 z-10">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          title="Translate"
          className="rounded-none py-1 px-4 gap-1"
          icon={<MdOutlineKeyboardDoubleArrowRight />}
        />
        <div
          style={{
            width: isOpen ? `${keys.length * 32}px` : "0px",
          }}
          className={`absolute h-full flex items-center right-0 translate-x-full w-0 top-0 bg-grays overflow-hidden transition-all`}
        >
          {keys.map((languages: keyof ILanguageSupported) => {
            return (
              <div
                key={languages}
                className={`h-full w-[32px] grid place-items-center flex-1 ${
                  currentLanguage == languages ? " bg-primary/50" : ""
                }`}
              >
                <div
                  onClick={() => {
                    setCurrentLanguage(languages);
                    setIsOpen(false);
                  }}
                  className={mappingFlag(languages) + " flag cursor-pointer"}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      {children}
    </Languages.Provider>
  );
};

export const useLanguages = () => {
  const context = useContext(Languages);
  if (context === undefined) {
    throw new Error("useLanguages must be used within a LanguagesProvider");
  }
  return context;
};
