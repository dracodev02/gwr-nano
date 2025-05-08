import BannerContactUs from "@/views/contactUs/banner";
import Certificate from "@/views/contactUs/certificate";
import GetInTouch from "@/views/contactUs/getInTouch";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - GWR Nano Insulation",
  description:
    "Contact Us Get in touch with Us. Feel free to contact us with any questions you have. Contact Us for more information Contact Info Email info@gwr-nano.com Call Us +36 30 908 2216+36 70 319 5835 Location H-1037 Budapest, Csillaghegyi út 23. Follow Us Facebook-f Instagram Youtube",
  openGraph: {
    title: "Contact Us - GWR Nano Insulation",
    description:
      "Contact Us Get in touch with Us. Feel free to contact us with any questions you have. Contact Us for more information Contact Info Email info@gwr-nano.com Call Us +36 30 908 2216+36 70 319 5835 Location H-1037 Budapest, Csillaghegyi út 23. Follow Us Facebook-f Instagram Youtube",
    url: "http://gwr-nano.com/contact-us",
    siteName: "GWR Nano Insulation",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "http://gwr-nano.com/wp-content/uploads/2023/10/innovationaward-210x300.jpg",
        width: 210,
        height: 300,
        alt: "GWR Nano Insulation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - GWR Nano Insulation",
    description:
      "Contact Us Get in touch with Us. Feel free to contact us with any questions you have. Contact Us for more information Contact Info Email info@gwr-nano.com Call Us +36 30 908 2216+36 70 319 5835 Location H-1037 Budapest, Csillaghegyi út 23. Follow Us Facebook-f Instagram Youtube",
    images: [
      {
        url: "http://gwr-nano.com/wp-content/uploads/2023/10/innovationaward-210x300.jpg",
        width: 210,
        height: 300,
        alt: "GWR Nano Insulation",
      },
    ],
    creator: "@gwrnano",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

const ContactUs = () => {
  return (
    <>
      <BannerContactUs />
      <GetInTouch />
      <Certificate />
    </>
  );
};

export default ContactUs;
