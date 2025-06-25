import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import Analysis from "../../../../assets/images/Analysis.png";
import Fortknox from "../../../../assets/images/Fortknox.png";
import Zenocide from "../../../../assets/images/Zenocide.png";
import Star from "../../../../assets/images/Star.png";

export const PortfolioSection = (): JSX.Element => {
  // Portfolio project data for mapping
  const portfolioProjects = [
    {
      id: 1,
      title: "MarkdownPDF Studio",
      description:
        "Engineered a real-time markdown editor with export-to-PDF functionality and theme support.Enabled users to preview, edit, and download professional-grade documents instantly.",
      image: Analysis,
      tags: ["FIGMA", "UX"],
    },
    {
      id: 2,
      title: "Ticket Booking App (React Native)",
      description:
        "Designed a multi-screen native application for browsing, booking, and managing events withpersistent storage and smooth navigation.",
      image: Fortknox,
      tags: ["MOBILE", "WEB"],
    },
    {
      id: 3,
      title: "AI Flashcard Generator",
      description:
        "Designed a multi-screen native application for browsing, booking, and managing events with persistent storage and smooth navigation. Delivered offline functionality using AsyncStorage and advanced UI patterns.",
      image: Zenocide,
      tags: ["APP", "WEB"],
    },
  ];

  return (
    <section className="flex w-full items-start px-4 md:px-6 lg:px-[100px] py-8 md:py-16 relative">
      <div className="flex flex-col w-full items-center justify-end gap-6 md:gap-8 max-w-[1240px] mx-auto">
        <header className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <img
              className="w-6 h-6 md:w-[30.43px] md:h-8"
              alt="Star"
              src={Star}
            />
            <h2 className="font-heading-h3-bold font-[number:var(--heading-h3-bold-font-weight)] text-white text-[24px] md:text-[32px] lg:text-[length:var(--heading-h3-bold-font-size)] tracking-[var(--heading-h3-bold-letter-spacing)] leading-[30px] md:leading-[40px] lg:leading-[var(--heading-h3-bold-line-height)] [font-style:var(--heading-h3-bold-font-style)]">
              Works
            </h2>
          </div>

          <a
            href="#"
            className="font-medium text-white text-sm md:text-lg underline [font-family:'Syne',Helvetica]"
          >
            view all
          </a>
        </header>

        <div className="flex flex-col gap-6 md:gap-8 w-full">
          {portfolioProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8 p-4 md:p-8 bg-[#cbcbcb7a] rounded-[20px] md:rounded-[40px] overflow-hidden border-none"
            >
              <CardContent className="p-0 flex flex-col lg:flex-row items-start gap-4 md:gap-8 w-full">
                <div className="relative w-full lg:w-auto flex-shrink-0">
                  <div className="absolute w-[209px] h-[165px] top-[291px] left-[515px] bg-app-accent rounded-[104.5px/82.5px] blur-[150px] hidden lg:block" />
                  <img
                    className="w-full lg:w-[572px] h-[250px] md:h-[350px] lg:h-[429px] object-cover rounded-lg lg:rounded-none"
                    alt={project.title}
                    src={project.image}
                  />
                </div>

                <div className="flex flex-col items-start justify-between h-full flex-1 gap-4 md:gap-6">
                  <div className="flex flex-col items-start gap-3 md:gap-4 w-full">
                    <h3 className="font-heading-h3-semibold font-[number:var(--heading-h3-semibold-font-weight)] text-white text-[20px] md:text-[28px] lg:text-[length:var(--heading-h3-semibold-font-size)] tracking-[var(--heading-h3-semibold-letter-spacing)] leading-[26px] md:leading-[36px] lg:leading-[var(--heading-h3-semibold-line-height)] [font-style:var(--heading-h3-semibold-font-style)]">
                      {project.title}
                    </h3>

                    <p className="font-body-lead font-[number:var(--body-lead-font-weight)] text-white text-[14px] md:text-[16px] lg:text-[length:var(--body-lead-font-size)] tracking-[var(--body-lead-letter-spacing)] leading-[20px] md:leading-[24px] lg:leading-[var(--body-lead-line-height)] [font-style:var(--body-lead-font-style)]">
                      {project.description}
                    </p>

                    <div className="flex items-start gap-2 flex-wrap">
                      {project.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="px-4 md:px-6 py-1 md:py-2 rounded-[100px] border border-solid border-white bg-transparent"
                        >
                          <span className="font-semibold text-white text-xs leading-normal [font-family:'Syne',Helvetica]">
                            {tag}
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="px-6 md:px-8 py-3 md:py-4 bg-white text-dark rounded-[100px] border border-solid border-white hover:bg-white/90 w-full sm:w-auto">
                    <span className="font-semibold text-sm leading-6 [font-family:'Syne',Helvetica]">
                      View Case Study
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
