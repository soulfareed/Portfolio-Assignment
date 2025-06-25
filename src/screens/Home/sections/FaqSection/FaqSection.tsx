import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FaqSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What is your design process?",
      answer:
        "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
      defaultOpen: true,
    },
    {
      question: "What tools and software do you use for UX design?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "How do you measure the success of your UX designs?",
      answer: "",
      defaultOpen: false,
    },
  ];

  return (
    <section className="flex flex-col items-start px-4 md:px-6 lg:px-[100px] py-8 md:py-16 w-full">
      <div className="flex flex-col max-w-[1240px] items-center justify-end gap-6 md:gap-8 w-full mx-auto">
        <div className="flex items-center gap-2 w-full">
          <img className="w-6 h-6 md:w-[30.43px] md:h-8" alt="Star" src="/star.svg" />
          <h2 className="font-heading-h3-bold font-[number:var(--heading-h3-bold-font-weight)] text-white text-[20px] md:text-[28px] lg:text-[length:var(--heading-h3-bold-font-size)] tracking-[var(--heading-h3-bold-letter-spacing)] leading-[26px] md:leading-[36px] lg:leading-[var(--heading-h3-bold-line-height)] [font-style:var(--heading-h3-bold-font-style)]">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              defaultValue={item.defaultOpen ? `item-${index}` : undefined}
              className="border-b border-white/20"
            >
              <AccordionTrigger className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-white text-[16px] md:text-[24px] lg:text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[22px] md:leading-[32px] lg:leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)] text-left hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-body-lead font-[number:var(--body-lead-font-weight)] text-gray text-[14px] md:text-[16px] lg:text-[length:var(--body-lead-font-size)] tracking-[var(--body-lead-letter-spacing)] leading-[20px] md:leading-[24px] lg:leading-[var(--body-lead-line-height)] [font-style:var(--body-lead-font-style)] pt-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};