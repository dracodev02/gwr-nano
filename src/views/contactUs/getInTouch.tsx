"use client";
import Button from "@/components/button";
import Divider from "@/components/divider";
import Input from "@/components/input";
import TextArea from "@/components/textArea";
import { languages } from "@/languages";
import { useLanguages } from "@/providers/languagesProvider";
import { FaPhone } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaYoutube,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const GetInTouch = () => {
  const { lang } = useLanguages();

  return (
    <section className="container-custom pt-[104px]">
      <div className="flex flex-col gap-5">
        <h2 className="text-[40px]">{lang(languages.Get_in_touch_with_Us)}</h2>
        <Divider />
        <p>{lang(languages.Feel_free_to_contact)}</p>
      </div>
      <div className="mt-10 grid grid-cols-2">
        <div className="py-10 pl-10 pr-20 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
          <h3 className="text-[32px] flex items-center gap-5 mb-9">
            {lang(languages.Contact_Us_for_more)}
          </h3>
          <form className="flex flex-col gap-5">
            <Input
              className="border-gray-300 bg-gray-100"
              placeholder={lang(languages.Name)}
            />
            <Input
              className="border-gray-300 bg-gray-100"
              type="email"
              placeholder={lang(languages.Email)}
            />
            <div className="w-full">
              <p className="text-grays">
                {lang(languages.Country)}{" "}
                <span className="text-red-500">*</span>
              </p>
              <Input className="border-gray-300 bg-gray-100 w-[60%]" required />
            </div>
            <Input
              className="border-gray-300 bg-gray-100"
              placeholder={lang(languages.Subject)}
            />
            <TextArea
              className="border-gray-300 bg-gray-100"
              rows={6}
              placeholder={lang(languages.Message)}
            />

            {/* reCAPTCHA */}
            {/* <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptchaChange} /> */}

            <Button
              className="mt-4 w-fit rounded-full text-sm"
              title={lang(languages.Contact_Us)}
              type="submit"
            />
          </form>
        </div>
        <div className="p-10 bg-white">
          <h3 className="text-[32px] flex items-center gap-5 mb-9">
            {lang(languages.Contact_Info)}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 aspect-square bg-[#ff5e1424] rounded-full grid place-items-center">
                <IoMail className="text-xl text-primary" />
              </div>
              <div>
                <h4 className="text-[20px] mb-2.5">{lang(languages.Email)}</h4>
                <p>info@gwr-nano.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 aspect-square bg-[#ff5e1424] rounded-full grid place-items-center">
                <FaLocationDot className="text-xl text-primary" />
              </div>
              <div>
                <h4 className="text-[20px] mb-2.5">
                  {lang(languages.Location)}
                </h4>
                <p>H-1037 Budapest, Csillaghegyi út 23.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 aspect-square bg-[#ff5e1424] rounded-full grid place-items-center">
                <FaPhone className="text-xl text-primary" />
              </div>
              <div>
                <h4 className="text-[20px] mb-2.5">
                  {lang(languages.Call_Us)}
                </h4>
                <p>+36 30 908 2216</p>
                <p>+36 70 319 5835</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-[32px] flex items-center gap-5 mb-9">
              {lang(languages.Follow_Us)}
            </h3>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 aspect-square bg-primary rounded-full grid place-items-center">
                <FaFacebookF className="text-[18px] text-white" />
              </div>
              <div className="w-10 h-10 aspect-square bg-primary rounded-full grid place-items-center">
                <FaInstagram className="text-[18px] text-white" />
              </div>
              <div className="w-10 h-10 aspect-square bg-primary rounded-full grid place-items-center">
                <FaYoutube className="text-[18px] text-white" />
              </div>
            </div>
          </div>
          <div className="h-1.5 border-t-2 border-b-2 border-black w-full mt-10"></div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
