import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-cv-white/95 backdrop-blur-sm shadow-lg border-b border-cv-silver" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-cv-brown">
            Le Duy Kha
          </div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 text-sm font-medium transition-colors hover:text-cv-brown hover:bg-cv-yellow-soft ${
                  activeSection === item.href.substring(1)
                    ? "text-cv-brown bg-cv-yellow-soft"
                    : "text-cv-grey-dark"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
          
          <Button 
            variant="default" 
            className="bg-cv-brown hover:bg-cv-brown/90 text-cv-white"
            onClick={() => window.open(`${import.meta.env.BASE_URL}platform.pdf`, '_blank')}
          >
            Download CV
          </Button>
        </div>
      </div>
    </nav>
  );
};