import React from "react";
import Button from "./Button";
import Marquee from "react-fast-marquee";


export default function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="lg:fixed top-0 lg:w-full w-screen z-50">
      <div className="bg-basic-yellow py-3 px-6 flex justify-between items-center">
        <div className="lg:ml-auto lg:space-x-2 lg:flex lg:gap-0 grid gap-2 grid-cols-2 ">
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
      <Marquee className={"relative bg-special-yellow w-full border border-dotted border-neutral-600"} speed={80}>
        <div className="flex my-1 select-none">
          <p className="mx-44">Je recherche activement une alternance !</p>
          <p className="mx-44">Je recherche activement une alternance !</p>
          <p className="mx-44">Je recherche activement une alternance !</p>
        </div>
      </Marquee>
    </div>
  );
}
