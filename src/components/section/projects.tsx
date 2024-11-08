"use client";
import { SectionTitle,Section, ProjectNav, Project } from "@/components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SlowMo } from "gsap/EasePack";
import { projects, projectType } from "@/lib/data";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Sevices() {
  const [activeNav, setActiveNav] = useState("All");

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#project`,
        start: "top center",
      },
    });

    tl.to(".project-title", {
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: "slow(0.6,0.8)",
    });
    tl.to(".projectNav", {
      scale: 1,
      opacity: 1,
      duration: 2,
      ease: "back.inOut",
    });
    tl.to(".project-card", {
      opacity: 1,
      duration: 2,
    });
  });

  return (
    <Section id="project">
      <div className="wrapper flex flex-col gap-6 items-center">
        {/*heading*/}
        <SectionTitle className="project-title mb-[1rem]">
          Projects{" "}
        </SectionTitle>

        {/*project nav*/}
        <ProjectNav activeNav={activeNav} setActiveNav={setActiveNav} />

        {/*body*/}
        <div className="project-card opacity-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-[2rem]">
          {projects.map((item: projectType, i: number) => {
            if (activeNav === "All") {
              return <Project key={i} data={item} />;
            } else if (activeNav.toLowerCase() == item.category.toLowerCase()) {
              return <Project key={i} data={item} />;
            }
          })}
        </div>
      </div>
    </Section>
  );
}
