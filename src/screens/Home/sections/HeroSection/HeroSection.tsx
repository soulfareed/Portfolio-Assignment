import React from "react";
import Rectangle from "../../../../assets/images/Rectangle.png";
import doradesign from "../../../../assets/images/doradesign.png";
import frame8 from "../../../../assets/images/Frame.png";
import wavefun from "../../../../assets/images/wavefun.png";

export const HeroSection = (): JSX.Element => {
  // Data for the hero headline elements
  const headlineElements = [
    {
      text: "I AM A",
      hasImage: true,
      imageSrc: Rectangle,
      imageAlt: "Rectangle",
    },
    { text: "FREELANCE", hasImage: false },
    {
      text: "DESIGNER",
      hasImage: true,
      imageSrc: Rectangle,
      imageAlt: "Rectangle",
    },
    { text: "FROM", hasImage: false },
    { text: "INDIA", hasImage: false },
  ];

  // Data for the client logos
  const clientLogos = [
    { width: "w-[115.44px]", height: "h-8", src: doradesign, alt: "Group" },
    { width: "w-[136.36px]", height: "h-8", src: wavefun, alt: "Group" },
    { width: "w-[98.91px]", height: "h-8", src: frame8, alt: "Group" },
    { width: "w-[98px]", height: "h-8", src: doradesign, alt: "Frame" },
    {
      width: "w-[140.46px]",
      height: "h-8",
      src: wavefun,
      alt: "Convertkit",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start px-4 md:px-6 lg:px-[100px] py-12 md:py-20 lg:py-44 relative">
      <div className="flex-col max-w-[1240px] items-end justify-end gap-8 md:gap-16 lg:gap-28 w-full flex relative mx-auto">
        <div className="flex flex-col items-center justify-center relative self-stretch w-full">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-[17px] relative self-stretch w-full">
            {headlineElements.map((element, index) =>
              element.hasImage ? (
                <div
                  key={index}
                  className="inline-flex items-center gap-1 md:gap-2 relative"
                >
                  <h1 className="relative w-fit mt-[-1.00px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[32px] md:text-[48px] lg:text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[40px] md:leading-[60px] lg:leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                    {element.text}
                  </h1>
                  <img
                    className="relative w-16 h-8 md:w-24 md:h-12 lg:w-32 lg:h-16"
                    alt={element.imageAlt}
                    src={element.imageSrc}
                  />
                </div>
              ) : (
                <h1
                  key={index}
                  className="relative w-fit mt-[-1.00px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[32px] md:text-[48px] lg:text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[40px] md:leading-[60px] lg:leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]"
                >
                  {element.text}
                </h1>
              )
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 relative self-stretch w-full">
          <div className="flex w-full lg:w-[716px] items-center justify-center gap-2.5 px-4 md:px-8 py-4 relative overflow-hidden">
            <div className="flex w-full items-start gap-4 md:gap-8 lg:gap-[136px] relative overflow-x-auto">
              {clientLogos.map((logo, index) => (
                <div
                  key={index}
                  className={`relative ${logo.width} ${logo.height} overflow-hidden flex-shrink-0 min-w-[80px]`}
                >
                  <img
                    className="h-full object-contain"
                    alt={logo.alt}
                    src={logo.src}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full lg:w-[492px] mt-[-1.00px] font-body-base-regular font-[number:var(--body-base-regular-font-weight)] text-gray text-[14px] md:text-[length:var(--body-base-regular-font-size)] tracking-[var(--body-base-regular-letter-spacing)] leading-[20px] md:leading-[var(--body-base-regular-line-height)] [font-style:var(--body-base-regular-font-style)]">
            Recent Computer Science graduate with hands-on experience from
            internships and freelance projects in full stack and backend
            development. Proficient in building scalable web applications using
            React, TypeScript, Node.js, and NestJS. Passionate about solving
            real-world problems, writing clean code, and contributing to
            high-impact development teams.
          </div>
        </div>
      </div>
    </section>
  );
};
