import { languages } from "@/languages";
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
};

const Product = () => {
  return (
    <>
      <BannerProductPage />
      <GWRNanoInsulationFeatures />
      <AreasOfApplicationProduct />
      <ProvideTheBestService subTitle={languages.A_unique_and_revolutionary} />
      <ContactData />
    </>
  );
};

export default Product;
