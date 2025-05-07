import { ILanguageSupported } from "@/languages";
import Cookies from "js-cookie";

export enum CookiesEnum {
  LANGUAGE = "language",
}

export const saveCookieLanguage = (language: string) => {
  Cookies.set(CookiesEnum.LANGUAGE, language, {
    path: "/", // Set to root path
  });
};

export const removeCookieLanguage = () => {
    Cookies.remove(CookiesEnum.LANGUAGE);
};

export const getCookieLanguage = (): keyof ILanguageSupported => {
    return Cookies.get(CookiesEnum.LANGUAGE) as keyof ILanguageSupported || "EN" as keyof ILanguageSupported;
}