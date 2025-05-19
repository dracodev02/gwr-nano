"use client";

import React, { useState } from "react";
import Button from "@/components/button";
import Input from "@/components/input";
import TextArea from "@/components/textArea";

import { useLanguages } from "@/providers/languagesProvider";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";

const SITE_KEY = "6Ldk7i4rAAAAABJKStyUIckzVfebo6SQRNIhDtgg";

const GetInTouchWithUs = () => {
  const { lang } = useLanguages();
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    // Xử lý gửi form tại đây...
    console.log("Form submitted with CAPTCHA token:", captchaToken);
  };

  return (
    <section className=" py-[104px] bg-home-sec5 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-70"></div>
      <div className="flex container-custom items-center justify-between gap-20 relative z-[1] max-lg:flex-col">
        <div className="">
          <h2 className="text-[40px] max-md:text-[32px] text-center capitalize">
            {lang("Get_in_touch_with_Us")}
          </h2>

          <div className="mt-8">
            <h4 className="text-[19px] text-center">{lang("Phone")}</h4>
            <p className="text-center mb-2">
              <strong>+36 30 908 2216</strong>
            </p>
            <p className="text-center">
              <strong>+36 70 319 5835</strong>
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-[19px] text-center">{lang("Email")}</h4>
            <Link
              href="mailto:info@gwr-nano.com"
              className="text-primary/90 hover:text-primary font-bold"
            >
              <p className="text-center">info@gwr-nano.com</p>
            </Link>
          </div>

          <div className="mt-8">
            <h4 className="text-[19px] text-center">{lang("Address")}</h4>
            <p className="text-center">H-1037 Budapest, Csillaghegyi út 23.</p>
          </div>
        </div>

        <div className="flex max-md:w-full">
          <Image
            src="/images/bg-mail-form.jpg"
            alt="mail-form"
            width={336}
            height={673}
            className="object-cover max-md:hidden"
          />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col bg-[#212121] p-5 gap-5 max-md:w-full"
          >
            <h2 className="text-white text-[19px]">{lang("Send_a_message")}</h2>

            <Input placeholder={lang("Name")} />
            <Input type="email" placeholder={lang("Email")} />
            <div className="w-full">
              <p className="text-grays">
                {lang("Country")} <span className="text-red-500">*</span>
              </p>
              <Input required className="w-full" />
            </div>
            <Input placeholder={lang("Subject")} />
            <TextArea placeholder={lang("Message")} />

            {/* reCAPTCHA */}
            <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptchaChange} />

            <div className="flex max-md: justify-end">
              <Button
                className="mt-4 w-fit text-sm"
                title={lang("Send_message")}
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchWithUs;
