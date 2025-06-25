import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Blog post data for mapping
const blogPosts = [
  {
    id: 1,
    date: "Nov 9, 2023",
    title: "How UX works in web",
    image: "/image-21-2.png",
    tags: ["UI", "UX"],
  },
  {
    id: 2,
    date: "Aug 18, 2023",
    title: "Case study - Analysis Application.",
    image: "/image-21-3.png",
    tags: ["DESIGN", "PRINT"],
  },
  {
    id: 3,
    date: "Feb 16, 2023",
    title: "3 ways to develop your skill",
    image: "/image-21-4.png",
    tags: ["FIGMA", "WEB"],
  },
];

export const BlogSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start px-4 md:px-6 lg:px-[100px] py-8 md:py-16 relative">
      <div className="flex-col max-w-[1240px] items-center justify-end gap-6 md:gap-8 w-full flex relative mx-auto">
        <div className="flex items-center justify-between relative self-stretch w-full">
          <div className="inline-flex items-center gap-2 relative">
            <img
              className="relative w-6 h-6 md:w-[30.43px] md:h-8"
              alt="Star"
              src="/star.svg"
            />
            <h2 className="relative w-fit mt-[-1.00px] font-heading-h3-bold font-[number:var(--heading-h3-bold-font-weight)] text-white text-[24px] md:text-[32px] lg:text-[length:var(--heading-h3-bold-font-size)] tracking-[var(--heading-h3-bold-letter-spacing)] leading-[30px] md:leading-[40px] lg:leading-[var(--heading-h3-bold-line-height)] [font-style:var(--heading-h3-bold-font-style)]">
              Blog
            </h2>
          </div>

          <Button
            variant="link"
            className="relative w-fit [font-family:'Syne',Helvetica] font-medium text-white text-sm md:text-lg tracking-[0] leading-[normal] underline p-0"
          >
            view all
          </Button>
        </div>

        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="items-center gap-4 md:gap-8 self-stretch w-full flex flex-col lg:flex-row bg-transparent border-none shadow-none"
          >
            <CardContent className="flex flex-col lg:flex-row items-center gap-4 md:gap-8 p-0 w-full">
              <img
                className="w-full lg:w-[286px] h-[200px] md:h-[214.5px] relative object-cover rounded-lg lg:rounded-none flex-shrink-0"
                alt="Blog post thumbnail"
                src={post.image}
              />

              <div className="flex flex-col w-full lg:w-[710px] items-start gap-3 md:gap-4 relative">
                <p className="relative self-stretch mt-[-1.00px] font-body-lead font-[number:var(--body-lead-font-weight)] text-gray text-[14px] md:text-[length:var(--body-lead-font-size)] tracking-[var(--body-lead-letter-spacing)] leading-[20px] md:leading-[var(--body-lead-line-height)] [font-style:var(--body-lead-font-style)]">
                  {post.date}
                </p>

                <h3 className="relative w-fit font-heading-h3-semibold font-[number:var(--heading-h3-semibold-font-weight)] text-white text-[18px] md:text-[24px] lg:text-[length:var(--heading-h3-semibold-font-size)] tracking-[var(--heading-h3-semibold-letter-spacing)] leading-[24px] md:leading-[32px] lg:leading-[var(--heading-h3-semibold-line-height)] [font-style:var(--heading-h3-semibold-font-style)]">
                  {post.title}
                </h3>

                <div className="inline-flex items-start gap-2 relative flex-wrap">
                  {post.tags.map((tag, index) => (
                    <Badge
                      key={`${post.id}-tag-${index}`}
                      variant="outline"
                      className="px-4 md:px-6 py-1 md:py-2 rounded-[100px] border border-solid border-[#ffffff]"
                    >
                      <span className="mt-[-0.50px] font-semibold text-white text-xs leading-[normal] relative w-fit [font-family:'Syne',Helvetica] tracking-[0] whitespace-nowrap">
                        {tag}
                      </span>
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col w-full lg:w-[180px] h-auto lg:h-14 items-center lg:items-end justify-center lg:justify-around gap-2.5 relative">
                <Button className="px-6 md:px-8 py-3 md:py-4 bg-white rounded-[100px] border border-solid border-[#ffffff] text-dark hover:bg-white/90 w-full sm:w-auto">
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Syne',Helvetica] font-semibold text-dark text-sm tracking-[0] leading-6 whitespace-nowrap">
                    Read
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};