import React from "react";
import Button from "./Button";

export default function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="bg-basic-yellow py-3 px-6 flex justify-between items-center">
        <div className="ml-auto space-x-2">
          <Button onClick={() => scrollToSection("section1")}>Résumé</Button>
          <Button onClick={() => scrollToSection("section2")}>
            Rythme d'alternance
          </Button>
          <Button onClick={() => scrollToSection("section3")}>Projets</Button>
          <Button onClick={() => scrollToSection("section4")}>
            Passions & Activités
          </Button>
        </div>
      </div>
      <div className="relative bg-special-yellow w-full border border-dotted border-neutral-600 ">
        <marquee className="transition-all duration-50">
          <div className="flex space-x-72 mt-1 select-none">
            <p className="">Je recherche activement une alternance !</p>
            <p className="">Je recherche activement une alternance !</p>
            <p className="">Je recherche activement une alternance !</p>
          </div>
        </marquee>
      </div>
    </div>
  );
}
