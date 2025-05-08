"use client";

import { languages } from "@/languages";
import { useLanguages } from "@/providers/languagesProvider";

const FrequentlyAskedQuestions = () => {
  const { lang } = useLanguages();

  return (
    <section className="container-custom py-[104px]">
      <h2 className="text-center text-[40px] max-md:text-[32px] mb-[60px]">
        {lang(languages.Frequently_Asked_Questions)}
      </h2>
      <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
        <div className="flex flex-col gap-8">
          <div>
            <h5 className="text-center text-xl">
              {lang(languages.GWR_Nano_Insulation_can)}
            </h5>
            <p className="text-center mt-2">
              {lang(languages.Any_Acrylic_based)}
            </p>
          </div>

          <div>
            <h5 className="text-center text-xl">
              {lang(languages.What_is_the_freezing)}
            </h5>
            <p className="text-center mt-2">{lang(languages.Below_5)}</p>
          </div>

          <div>
            <h5 className="text-center text-xl">
              {lang(languages.At_what_operating_pressure)}
            </h5>
            <p className="text-center mt-2">{lang(languages["100_120_Bar"])}</p>
            <p className="text-center">{lang(languages["515_LP_517_FFLP"])}</p>
          </div>

          <div>
            <h5 className="text-center text-xl">
              {lang(languages.What_is_the_R)}
            </h5>
            <p className="text-center mt-2">
              {lang(languages.The_R_value_for)}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h5 className="text-center text-xl">
              {lang(languages.What_tools_can)}
            </h5>
            <p className="text-center mt-2">
              {lang(languages.High_performance_airless)}
            </p>
          </div>
          <div>
            <h5 className="text-center text-xl">
              {lang(languages.Which_component_is_responsible)}
            </h5>
            <p className="text-center mt-2">
              {lang(languages.Micro_sized_ceramic)}
            </p>
          </div>
          <div>
            <h5 className="text-center text-xl">
              {lang(languages.Can_the_material_be)}
            </h5>
            <p className="text-center mt-2">{lang(languages.Yes)}</p>
          </div>
          <div>
            <h5 className="text-center text-xl">
              {lang(languages.What_is_the_drying)}
            </h5>
            <p className="text-center mt-2">{lang(languages["8_24_hours"])}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
