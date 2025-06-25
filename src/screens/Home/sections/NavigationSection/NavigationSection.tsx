import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation menu items data
  const navItems = [
    { label: "Home", active: true },
    { label: "About", active: false },
    { label: "Projects", active: false },
    { label: "Contact", active: false },
  ];

  return (
    <header className="bg-dark py-4 md:py-8 px-4 md:px-[100px]">
      <div className="flex items-center justify-between max-w-[1240px] mx-auto">
        {/* Logo */}
        <div className="flex items-start w-[103px] h-8">
          <div className="w-[46px] h-8 relative">
            <div className="absolute w-[9px] h-8 top-0 left-0 bg-white" />
            <div className="absolute w-[9px] h-8 top-0 left-6 bg-white" />
            <div className="absolute w-3 h-3 top-px left-[11px] bg-white rounded-[5.93px]" />
            <div className="absolute w-3 h-3 top-[19px] left-[34px] bg-white rounded-[5.93px]" />
          </div>
        </div>

        {/* Desktop Navigation Menu */}
        <NavigationMenu className="max-w-none hidden md:block">
          <NavigationMenuList className="flex space-x-0">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  className={`inline-flex items-center justify-center px-6 py-2 rounded-3xl ${
                    item.active
                      ? "bg-white text-dark"
                      : "text-white hover:bg-dark/10"
                  } [font-family:'Syne',Helvetica] font-normal text-base leading-5`}
                  href="#"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Hire Me Button */}
        <Button
          variant="outline"
          className="hidden md:inline-flex rounded-[100px] border border-solid border-white text-white [font-family:'Syne',Helvetica] font-medium text-sm leading-6"
        >
          HIRE ME
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`px-4 py-2 rounded-lg ${
                  item.active
                    ? "bg-white text-dark"
                    : "text-white hover:bg-white/10"
                } [font-family:'Syne',Helvetica] font-normal text-base`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="outline"
              className="mt-4 mx-4 rounded-[100px] border border-solid border-white text-white [font-family:'Syne',Helvetica] font-medium text-sm leading-6"
            >
              HIRE ME
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};