import { ExternalLinkIcon, Link } from "lucide-react";
import React from "react";
import Star from "../../../../assets/images/Star.png";

export const FooterSection = (): JSX.Element => {
  // Data for the scrolling text banner
  const bannerItems = [
    { text: "WEBFLOW", hasStarAfter: true, starSrc: Star },
    { text: "FIGMA", hasStarAfter: true, starSrc: Star },
    { text: "DESIGNER", hasStarAfter: true, starSrc: Star },
    { text: "DEVELOPER", hasStarAfter: false, starSrc: Star },
  ];

  // Social media links
  const socialLinks = [
    { name: "Github", url: "https://github.com/soulfareed" },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/fareed-zaman-952a3b222/",
    },
    { name: "Twitter", url: "https://twitter.com/" },
    { name: "Instagram", url: "https://instagram.com/" },
  ];

  return (
    <footer className="flex flex-col items-start px-4 md:px-6 lg:px-[100px] py-0 bg-dark w-full">
      <div className="flex flex-col w-full items-center justify-end pt-8 md:pt-16 pb-0 px-0 max-w-[1240px] mx-auto">
        {/* Scrolling text banner */}
        <div className="flex items-center justify-center gap-4 md:gap-10 overflow-hidden flex-wrap">
          {bannerItems.map((item, index) => (
            <React.Fragment key={`banner-item-${index}`}>
              <div className="[-webkit-text-stroke:1px_#cacaca] md:[-webkit-text-stroke:2px_#cacaca] font-['Syne',Helvetica] font-bold text-transparent text-[28px] md:text-[40px] lg:text-[56px] tracking-[0] leading-[36px] md:leading-[60px] lg:leading-[88px] whitespace-nowrap">
                {item.text}
              </div>

              {item.hasStarAfter && (
                <div className="relative w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16">
                  <img
                    className="absolute w-[26px] h-7 md:w-[40px] md:h-10 lg:w-[53px] lg:h-14 top-0.5 md:top-1 left-[2px] md:left-[3px] lg:left-[5px]"
                    alt="Star"
                    src={item.starSrc}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Contact section */}
        <div className="flex w-full items-end justify-center pt-12 md:pt-20 lg:pt-28 pb-4 md:pb-8 px-0">
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8 w-full">
            <div className="flex flex-col items-center gap-4 md:gap-8 max-w-[656px] text-center">
              <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[32px] md:text-[48px] lg:text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[40px] md:leading-[60px] lg:leading-[var(--heading-h1-line-height)]">
                LET&apos;S TALK!
              </h1>

              <div className="flex items-center justify-center gap-2">
                <p className="font-body-lead font-[number:var(--body-lead-font-weight)] text-white text-[14px] md:text-[16px] lg:text-[length:var(--body-lead-font-size)] tracking-[var(--body-lead-letter-spacing)] leading-[20px] md:leading-[24px] lg:leading-[var(--body-lead-line-height)]">
                  fareedzaman501@gmail.com
                </p>
                <ExternalLinkIcon className="w-3 h-3 md:w-[16.04px] md:h-[16.04px] text-white" />
              </div>
            </div>

            {/* Footer bottom section */}
            <div className="flex flex-col md:flex-row w-full items-center md:items-end justify-between gap-4 md:gap-0">
              <div className="flex items-center gap-2">
                <p className="font-body-syne font-[number:var(--body-syne-font-weight)] text-white text-[12px] md:text-[length:var(--body-syne-font-size)] tracking-[var(--body-syne-letter-spacing)] leading-[16px] md:leading-[var(--body-syne-line-height)] whitespace-nowrap">
                  © Md Fareed Zaman
                </p>
              </div>

              <div className="flex items-start gap-4 md:gap-8 flex-wrap justify-center">
                {socialLinks.map((link, index) => (
                  <a
                    key={`social-link-${index}`}
                    href={link.url}
                    target="_blank"
                    className="font-body-syne font-[number:var(--body-syne-font-weight)] text-white text-[12px] md:text-[length:var(--body-syne-font-size)] tracking-[var(--body-syne-letter-spacing)] leading-[16px] md:leading-[var(--body-syne-line-height)] whitespace-nowrap hover:underline"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
