"use client";
import Button from "@/components/button";
import Divider from "@/components/divider";
import { ILanguageList } from "@/languages";
import { useLanguages } from "@/providers/languagesProvider";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

interface ProvideTheBestServiceProps {
  subTitle: keyof ILanguageList;
  email: string;
}

const ProvideTheBestService: React.FC<ProvideTheBestServiceProps> = ({
  subTitle,
  email,
}) => {
  const { lang } = useLanguages();

  return (
    <section className="bg-product-sec4 bg-transparent relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[#101218] opacity-50"></div>
      <div className="flex flex-col items-center container-custom gap-5 relative z-[1] py-[104px]">
        <Divider />
        <h2 className="text-white text-[40px] max-md:text-[32px] max-md:text-center">
          {lang("We_Provide_the_Best")}
        </h2>
        <p className="text-white/80 max-md:text-center">{lang(subTitle)}</p>
        <Link href={"mailto:" + email}>
          <Button
            className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 max-md:w-fit whitespace-nowrap"
            title={lang("Contact_us_today")}
            icon={<BsArrowRight className="text-sm" />}
          />
        </Link>
      </div>
    </section>
  );
};
export default ProvideTheBestService;
