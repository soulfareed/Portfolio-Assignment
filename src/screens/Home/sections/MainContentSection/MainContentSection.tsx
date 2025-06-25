import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  // Experience data for mapping
  const experiences = [
    {
      position: "Lead Product Designer",
      company: "Fortknox",
      period: "Mar 2022 - Oct 2023",
    },
    {
      position: "Intern Designer",
      company: "OmniSafe",
      period: "Mar 2022 - Oct 2023",
    },
    {
      position: "UI Designer",
      company: "Doradesign",
      period: "Mar 2022 - Oct 2023",
    },
    {
      position: "Frontend Developer",
      company: "OpacityAuthor",
      period: "Mar 2022 - Oct 2023",
    },
  ];

  return (
    <section className="flex flex-col items-start px-4 md:px-6 lg:px-[100px] py-8 md:py-16 w-full">
      <div className="flex flex-col max-w-[1240px] items-center justify-end gap-6 md:gap-8 w-full mx-auto">
        <div className="flex items-center gap-2 relative self-stretch w-full">
          <img className="w-6 h-6 md:w-[30.43px] md:h-8" alt="Star" src="/star.svg" />
          <h3 className="w-fit mt-[-1.00px] font-heading-h3-bold font-[number:var(--heading-h3-bold-font-weight)] text-white text-[24px] md:text-[32px] lg:text-[length:var(--heading-h3-bold-font-size)] tracking-[var(--heading-h3-bold-letter-spacing)] leading-[30px] md:leading-[40px] lg:leading-[var(--heading-h3-bold-line-height)] [font-style:var(--heading-h3-bold-font-style)]">
            Experience
          </h3>
        </div>

        <Card className="w-full bg-transparent border-none">
          <CardContent className="p-0">
            {experiences.map((exp, index) => (
              <div key={index} className="w-full">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-0 py-3 md:py-2 w-full border-b-[1.5px] border-[#ffffff80] gap-2 md:gap-4">
                  <div className="flex w-full md:w-[604px] items-center gap-4">
                    <h4 className="w-fit mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-white text-[18px] md:text-[24px] lg:text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[24px] md:leading-[32px] lg:leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
                      {exp.position}
                    </h4>
                  </div>

                  <div className="flex flex-col items-start md:items-end justify-center gap-1 md:gap-2 flex-1">
                    <h5 className="self-stretch mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-white text-[16px] md:text-[20px] lg:text-[length:var(--heading-h5-font-size)] text-left md:text-right tracking-[var(--heading-h5-letter-spacing)] leading-[22px] md:leading-[28px] lg:leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                      {exp.company}
                    </h5>
                    <p className="self-stretch font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-white text-[14px] md:text-[length:var(--body-base-regular-font-size)] text-left md:text-right tracking-[var(--body-base-regular-letter-spacing)] leading-[20px] md:leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)]">
                      {exp.period}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};