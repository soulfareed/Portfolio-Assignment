import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  const testimonial = {
    author: "Floyd Miles",
    company: "eBay",
    content:
      "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  };

  return (
    <section className="flex flex-col items-start px-4 md:px-6 lg:px-[100px] py-8 md:py-16 relative self-stretch w-full">
      <div className="flex flex-col max-w-[1240px] items-center justify-end gap-6 md:gap-8 w-full relative mx-auto">
        <div className="flex items-center gap-2 relative self-stretch w-full">
          <img
            className="relative w-6 h-6 md:w-[30.43px] md:h-8"
            alt="Star"
            src="/star.svg"
          />
          <h3 className="relative w-fit mt-[-1.00px] font-heading-h3-bold font-[number:var(--heading-h3-bold-font-weight)] text-white text-[24px] md:text-[32px] lg:text-[length:var(--heading-h3-bold-font-size)] tracking-[var(--heading-h3-bold-letter-spacing)] leading-[30px] md:leading-[40px] lg:leading-[var(--heading-h3-bold-line-height)] [font-style:var(--heading-h3-bold-font-style)]">
            What they say
          </h3>
        </div>

        <Card className="bg-transparent border-0 w-full">
          <CardContent className="flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-8 px-0 py-4 relative self-stretch w-full">
            <div className="flex flex-col w-full lg:w-[498px] items-start gap-4 px-0 py-4 relative">
              <div className="inline-flex items-center gap-4 relative">
                <Avatar className="w-12 h-12 md:w-16 md:h-16 rounded-[100px]">
                  <AvatarImage src="..//frame.png" alt={testimonial.author} />
                  <AvatarFallback>
                    {testimonial.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div className="inline-flex flex-col items-start gap-1 relative">
                  <h5 className="relative w-fit mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-white text-[16px] md:text-[20px] lg:text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[22px] md:leading-[28px] lg:leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                    {testimonial.author}
                  </h5>
                  <p className="relative w-fit font-body-lead font-[number:var(--body-lead-font-weight)] text-gray text-[14px] md:text-[16px] lg:text-[length:var(--body-lead-font-size)] tracking-[var(--body-lead-letter-spacing)] leading-[20px] md:leading-[24px] lg:leading-[var(--body-lead-line-height)] [font-style:var(--body-lead-font-style)]">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>

            <div className="inline-flex flex-wrap items-end gap-[8px_8px] pt-4 lg:pt-8 pb-0 px-0 relative w-full">
              <div className="absolute w-[80px] h-[60px] md:w-[113px] md:h-24 -top-2 md:-top-4 left-0">
                <img
                  className="absolute w-[70px] h-[50px] md:w-[102px] md:h-[85px] top-1 md:top-1.5 left-1 md:left-1.5"
                  alt="Quote mark"
                  src="/group-3.png"
                />
              </div>

              <div className="flex flex-col w-full lg:w-[710px] items-start gap-4 relative rounded-3xl">
                <h4 className="relative self-stretch mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-white text-[16px] md:text-[24px] lg:text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[22px] md:leading-[32px] lg:leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
                  {testimonial.content}
                </h4>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="inline-flex flex-col items-end justify-end relative">
          <div className="inline-flex items-start gap-2 md:gap-4 relative">
            <img
              className="relative w-[60px] h-[60px] md:w-[88px] md:h-[88px] mt-[-4px] md:mt-[-8.00px] mb-[-20px] md:mb-[-40.00px] ml-[-10px] md:ml-[-20.00px]"
              alt="Decorative element"
              src="/frame-6.svg"
            />
            <img
              className="relative w-[70px] h-[70px] md:w-[104px] md:h-[104px] mt-[-8px] md:mt-[-16.00px] mb-[-24px] md:mb-[-48.00px] mr-[-18px] md:mr-[-36.00px]"
              alt="Decorative element"
              src="/frame-3.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};