"use client";

import React, { useState } from "react";
import Button from "@/components/button";
import Input from "@/components/input";
import TextArea from "@/components/textArea";
import { languages } from "@/languages";
import { useLanguages } from "@/providers/languagesProvider";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

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
      <div className="flex container-custom items-center justify-between gap-20 relative z-[1]">
        <div className="">
          <h2 className="text-[40px]">{lang(languages.Get_in_touch)}</h2>

          <div className="mt-8">
            <h4 className="text-[19px] text-center">{lang(languages.Phone)}</h4>
            <p className="text-center mb-2">
              <strong>+36 30 908 2216</strong>
            </p>
            <p className="text-center">
              <strong>+36 70 319 5835</strong>
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-[19px] text-center">{lang(languages.Email)}</h4>
            <p className="text-center">info@gwr-nano.com</p>
          </div>

          <div className="mt-8">
            <h4 className="text-[19px] text-center">
              {lang(languages.Address)}
            </h4>
            <p className="text-center">H-1037 Budapest, Csillaghegyi út 23.</p>
          </div>
        </div>

        <div className="flex">
          <Image
            src="/images/bg-mail-form.jpg"
            alt="mail-form"
            width={336}
            height={673}
            className="object-cover"
          />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col bg-[#212121] p-5 gap-5"
          >
            <h2 className="text-white text-[19px]">
              {lang(languages.Send_a_message)}
            </h2>

            <Input placeholder={lang(languages.Name)} />
            <Input type="email" placeholder={lang(languages.Email)} />
            <div className="w-full">
              <p className="text-grays">
                {lang(languages.Country)}{" "}
                <span className="text-red-500">*</span>
              </p>
              <Input required className="w-full" />
            </div>
            <Input placeholder={lang(languages.Subject)} />
            <TextArea placeholder={lang(languages.Message)} />

            {/* reCAPTCHA */}
            <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptchaChange} />

            <Button
              className="mt-4 w-fit rounded-full text-sm"
              title={lang(languages.Send_message)}
              type="submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchWithUs;
