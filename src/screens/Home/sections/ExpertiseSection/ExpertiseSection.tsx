import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import Star from "../../../../assets/images/Star.png";
import Vector from "../../../../assets/images/Vector.png";

export const ExpertiseSection = (): JSX.Element => {
  // Data for expertise cards to enable mapping
  const expertiseItems = [
    {
      title: "Branding",
      icon: Vector,
      iconWidth: "w-2",
      iconHeight: "h-[7px]",
      description:
        "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
      title: "UI Design",
      icon: Vector,
      iconWidth: "w-2",
      iconHeight: "h-[7px]",
      description:
        "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
      title: "UX Design",
      icon: Vector,
      iconWidth: "w-4",
      iconHeight: "h-4",
      description:
        "I comprehend and resolve digital product issues using a user-focused methodology. Investigation. compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements",
    },
    {
      title: "Development",
      icon: Vector,
      iconWidth: "w-2",
      iconHeight: "h-[7px]",
      description:
        "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome. complex coding. Webflow forms the foundation of my web development approach, I employ it to produce safe, top-notch personalized websites.",
    },
  ];

  return (
    <section className="py-8 md:py-16 px-4 md:px-6 lg:px-[100px]">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-6 md:gap-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 w-full">
          <img className="w-6 h-6 md:w-8 md:h-8" alt="Star" src={Star} />
          <h2 className="font-heading-h3-bold text-white text-[24px] md:text-[32px] lg:text-[length:var(--heading-h3-bold-font-size)] tracking-[var(--heading-h3-bold-letter-spacing)] leading-[30px] md:leading-[40px] lg:leading-[var(--heading-h3-bold-line-height)] [font-style:var(--heading-h3-bold-font-style)]">
            Expertise
          </h2>
        </div>

        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 w-full">
          {expertiseItems.map((item, index) => (
            <Card key={index} className="bg-transparent border-0">
              <CardContent className="p-0 flex flex-col gap-3 md:gap-4">
                <div className="flex items-center gap-2">
                  <img
                    className={`${item.iconWidth} ${item.iconHeight}`}
                    alt="Icon"
                    src={item.icon}
                  />
                  <h3 className="font-heading-h5 text-white text-[18px] md:text-[20px] lg:text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[24px] md:leading-[28px] lg:leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                    {item.title}
                  </h3>
                </div>
                <p className="font-body-base-regular text-gray text-[14px] md:text-[length:var(--body-base-regular-font-size)] tracking-[var(--body-base-regular-letter-spacing)] leading-[20px] md:leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)]">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
