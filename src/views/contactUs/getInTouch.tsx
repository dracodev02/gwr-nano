"use client";
import Button from "@/components/button";
import Divider from "@/components/divider";
import Input from "@/components/input";
import TextArea from "@/components/textArea";

import { useLanguages } from "@/providers/languagesProvider";
import Link from "next/link";
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
        <h2 className="text-[40px] max-md:text-[32px]">
          {lang("Get_in_touch_with_Us")}
        </h2>
        <Divider />
        <p>{lang("Feel_free_to_contact")}</p>
      </div>
      <div className="mt-10 grid grid-cols-2 max-lg:grid-cols-1">
        <div className="py-10 pl-10 pr-20 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] max-md:p-5 bg-[#fbfbfb]">
          <h3 className="text-[32px] flex items-center gap-5 mb-9">
            {lang("Contact_Us_for_more")}
          </h3>
          <form className="flex flex-col gap-5">
            <Input
              className="border-gray-300 bg-gray-100"
              placeholder={lang("Name")}
            />
            <Input
              className="border-gray-300 bg-gray-100"
              type="email"
              placeholder={lang("Email")}
            />
            <div className="w-full">
              <p className="text-gray-600 font-bold">
                {lang("Country")} <span className="text-red-500">*</span>
              </p>
              <Input className="border-gray-300 bg-gray-100 w-[60%]" required />
            </div>
            <Input
              className="border-gray-300 bg-gray-100"
              placeholder={lang("Subject")}
            />
            <TextArea
              className="border-gray-300 bg-gray-100"
              rows={6}
              placeholder={lang("Message")}
            />

            {/* reCAPTCHA */}
            {/* <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptchaChange} /> */}

            <div className="flex max-md:justify-end">
              <Button
                className="mt-4 w-fit text-sm"
                title={lang("Contact_Us")}
                type="submit"
              />
            </div>
          </form>
        </div>
        <div className="p-10 bg-white">
          <h3 className="text-[32px] max-md:text-center gap-5 mb-9">
            {lang("Contact_Info")}
          </h3>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            <div className="flex gap-4 max-md:flex-col max-md:items-center">
              <div className="w-10 h-10 aspect-square bg-[#ff5e1424] rounded-full grid place-items-center">
                <IoMail className="text-xl text-primary" />
              </div>
              <div>
                <h4 className="text-[20px] mb-2.5 max-md:text-center">
                  {lang("Email")}
                </h4>
                <Link
                  href={"mailto:info@gwr-nano.com"}
                  className="max-md:text-center text-primary/90 hover:text-primary"
                >
                  info@gwr-nano.com
                </Link>
              </div>
            </div>
            <div className="flex gap-4 max-md:flex-col max-md:items-center">
              <div className="w-10 h-10 aspect-square bg-[#ff5e1424] rounded-full grid place-items-center">
                <FaLocationDot className="text-xl text-primary" />
              </div>
              <div>
                <h4 className="text-[20px] mb-2.5 max-md:text-center">
                  {lang("Location")}
                </h4>
                <p className="max-md:text-center">
                  H-1037 Budapest, Csillaghegyi út 23.
                </p>
              </div>
            </div>
            <div className="flex gap-4 max-md:flex-col max-md:items-center">
              <div className="w-10 h-10 aspect-square bg-[#ff5e1424] rounded-full grid place-items-center">
                <FaPhone className="text-xl text-primary" />
              </div>
              <div>
                <h4 className="text-[20px] mb-2.5 max-md:text-center">
                  {lang("Call_Us")}
                </h4>
                <p className="max-md:text-center">+36 30 908 2216</p>
                <p className="max-md:text-center">+36 70 319 5835</p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-[32px] gap-5 mb-9 max-md:text-center">
              {lang("Follow_Us")}
            </h3>
            <div className="flex items-center gap-4 max-md:justify-center">
              <Link
                target="_blank"
                href="https://www.facebook.com/gwrnanoinsulation/"
                className="w-10 h-10 aspect-square bg-primary/90 hover:bg-primary rounded-full grid place-items-center"
              >
                <FaFacebookF className="text-[18px] text-white" />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/gwrnanoinsulation/"
                className="w-10 h-10 aspect-square bg-primary/90 hover:bg-primary rounded-full grid place-items-center"
              >
                <FaInstagram className="text-[18px] text-white" />
              </Link>
              <Link
                target="_blank"
                href="https://www.youtube.com/channel/UCeBSS-N1ztj4INwnHL3-NGw"
                className="w-10 h-10 aspect-square bg-primary/90 hover:bg-primary rounded-full grid place-items-center"
              >
                <FaYoutube className="text-[18px] text-white" />
              </Link>
            </div>
          </div>
          <div className="h-1.5 border-t-2 border-b-2 border-black w-full mt-10"></div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
