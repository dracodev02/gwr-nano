import AreasOfApplicationProduct from "@/views/product/areasOfApplicationProduct";
import BannerProductPage from "@/views/product/banner";
import ContactData from "@/views/product/contactData";
import GWRNanoInsulationFeatures from "@/views/product/GWRNanoInsulationFeatures";
import ProvideTheBestService from "@/views/product/provideTheBestService";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product - GWR Nano Insulation",
  description:
    "GWR NANO INSULATION® GWR Nano Insulation®. is so-called Liquid Ceramic Heat Insulation (LCHI). The color of the material is basically white, its consistency is liquid; it resembles a paint of dense consistency the most, but, of course, it cannot be considered as simple paint by any means.  A unique, revolutionary solution in the construction industry. … Product Read More »",
  openGraph: {
    title: "Product - GWR Nano Insulation",
    description:
      "GWR NANO INSULATION® GWR Nano Insulation®. is so-called Liquid Ceramic Heat Insulation (LCHI). The color of the material is basically white, its consistency is liquid; it resembles a paint of dense consistency the most, but, of course, it cannot be considered as simple paint by any means.  A unique, revolutionary solution in the construction industry. … Product Read More »",
    url: "http://gwr-nano.com/product",
    siteName: "GWR Nano Insulation",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "http://gwr-nano.com/wp-content/uploads/2023/10/20190607_144303-scaled.jpg",
        width: 1220,
        height: 915,
        alt: "GWR Nano Insulation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product - GWR Nano Insulation",
    description:
      "GWR NANO INSULATION® GWR Nano Insulation®. is so-called Liquid Ceramic Heat Insulation (LCHI). The color of the material is basically white, its consistency is liquid; it resembles a paint of dense consistency the most, but, of course, it cannot be considered as simple paint by any means.  A unique, revolutionary solution in the construction industry. … Product Read More »",
    images: [
      {
        url: "http://gwr-nano.com/wp-content/uploads/2023/10/20190607_144303-scaled.jpg",
        width: 1220,
        height: 915,
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

const Product = () => {
  return (
    <>
      <BannerProductPage />
      <GWRNanoInsulationFeatures />
      <AreasOfApplicationProduct />
      <ProvideTheBestService
        subTitle={"A_unique_and_revolutionary"}
        email="info@gwr-nano.com"
      />
      <ContactData />
    </>
  );
};

export default Product;
