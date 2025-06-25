import React from "react";
import { BlogSection } from "./sections/BlogSection";
import { ExpertiseSection } from "./sections/ExpertiseSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-dark">
      <NavigationSection />
      <HeroSection />
      <ExpertiseSection />
      <PortfolioSection />
      <MainContentSection />
      <BlogSection />
      <TestimonialsSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
};
