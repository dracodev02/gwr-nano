"use client";
import Button from "@/components/button";
import Divider from "@/components/divider";
import Input from "@/components/input";
import TextArea from "@/components/textArea";

import { useLanguages } from "@/providers/languagesProvider";
import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const ContactData = () => {
  const { lang } = useLanguages();

  return (
    <section className="container-custom flex w-full py-[100px] max-md:flex-col gap-y-10">
      <div className="flex-1">
        <h5 className="text-xl">{lang("Your_request")}</h5>
        <h2 className="text-[40px] max-md:text-[32px]">
          {lang("Contact_data")}
        </h2>
        <div className="flex flex-col gap-4 mt-9">
          <Link
            href={"mailto:info@gwr-nano.com"}
            className="text-primary flex items-center w-fit"
          >
            <div className="w-[80px]">
              <IoMdMail className="text-[55px]" />
            </div>
            <p>info@gwr-nano.com</p>
          </Link>
          <Divider width="192" className="max-w-[192px]" />
          <div className="text-primary flex items-center w-fit">
            <div className="w-[80px]">
              <FaPhoneVolume className="text-[55px]" />
            </div>
            <p>+36 70 319 5835</p>
          </div>
        </div>
      </div>
      <form className="flex flex-col flex-1 gap-5">
        <div className="w-[60%] max-sm:w-full">
          <p className="font-bold">
            {lang("Name")} <span className="text-red-500">*</span>
          </p>
          <div className="flex gap-5 w-full">
            <div className="flex-1">
              <Input required className="w-full" />
              <p className="text-sm max-md:text-xs">{lang("First")}</p>
            </div>
            <div className="flex-1">
              <Input required className="w-full" />
              <p className="text-sm max-md:text-xs">{lang("Last")}</p>
            </div>
          </div>
        </div>
        <div className="w-[60%] max-sm:w-full">
          <p className="font-bold">
            {lang("Email")} <span className="text-red-500">*</span>
          </p>
          <Input type="email" required className="w-full" />
        </div>
        <div className="w-[60%] max-sm:w-full">
          <p className="font-bold">{lang("Telephone")}</p>
          <Input className="w-full" />
        </div>
        <div className="w-[60%] max-sm:w-full">
          <p className="font-bold">
            {lang("Company")} <span className="text-red-500">*</span>
          </p>
          <Input required className="w-full" />
        </div>
        <div className="w-[60%] max-sm:w-full">
          <p className="font-bold">
            {lang("Country")} <span className="text-red-500">*</span>
          </p>
          <Input required className="w-full" />
        </div>
        <div className="w-[60%] max-sm:w-full">
          <p className="font-bold">
            {lang("Subject")} <span className="text-red-500">*</span>
          </p>
          <Input required className="w-full" />
        </div>
        <div className="">
          <p className="font-bold">
            {lang("Message")} <span className="text-red-500">*</span>
          </p>
          <TextArea
            required
            placeholder={lang("Message")}
            className="w-full"
            rows={4}
          />
        </div>
        <div className="flex max-md:justify-end">
          <Button
            className="w-fit text-sm"
            title={lang("Submit")}
            type="submit"
          />
        </div>
      </form>
    </section>
  );
};

export default ContactData;
