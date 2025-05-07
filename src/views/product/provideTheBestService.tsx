"use client";
import Button from "@/components/button";
import Divider from "@/components/divider";
import { ILanguageSupported, languages } from "@/languages";
import { useLanguages } from "@/providers/languagesProvider";
import { BsArrowRight } from "react-icons/bs";

interface ProvideTheBestServiceProps {
  subTitle: ILanguageSupported;
}

const ProvideTheBestService: React.FC<ProvideTheBestServiceProps> = ({
  subTitle,
}) => {
  const { lang } = useLanguages();

  return (
    <section className="bg-product-sec4 bg-transparent relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#101218] opacity-50"></div>
      <div className="flex flex-col items-center container-custom gap-5 relative z-[1] py-[104px]">
        <Divider />
        <h2 className="text-white text-[40px]">
          {lang(languages.We_Provide_the_Best)}
        </h2>
        <p className="text-white/80">{lang(subTitle)}</p>
        <Button
          className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2"
          title={lang(languages.Contact_us_today)}
          icon={<BsArrowRight className="text-sm" />}
        />
      </div>
    </section>
  );
};
export default ProvideTheBestService;
