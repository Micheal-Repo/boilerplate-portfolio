"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SlowMo } from "gsap/EasePack";

gsap.registerPlugin(useGSAP, SlowMo);
export default function IntroAnimatiom() {
  interface textsType {
    text: string;
  }

  const Texts: textsType[] = [
    { text: "Hello dear" },
    { text: "I'm" },
    { text: "EGWIN CHOSEN" },
  ];

  useGSAP(() => {
    let tl = gsap.timeline({
      onComplete:()=>{
        let textanime:any = document.querySelector(".text-anime")
        
        textanime.classList.add("hidden")
      }
    });

    Texts.forEach((text, i) => {
      tl.to(`.text-${i}`, {
        scale: 3,
        duration: 2,
        ease: "slow(0.6,0.8)",
      });
      tl.from(
        `.text-${i}`,
        {
          duration: 2,
          opacity: 0,
          ease: "slow(0.6,0.8,true)",
        },
        "<"
      );
    });
    
    tl.to(".text-hero",{
      opacity:1,
      scale:1,
      duration:2,
      ease:"back.inOut"
    })
    tl.to(".hero-desc",{
      opacity:0.6,
      y:0,
      duration:2,
      ease:"bounce.inOut"
    })
    tl.to(".hero-counter",{
      opacity:1,
      y:0,
      duration:2,
      ease:"back.inOut",
      stagger:0.1
    },"<")
    tl.to(".hero-btn",{
      opacity:1,
      scale:1,
      duration:2,
      ease:"back.inOut",
      stagger:0.1
    },"<")
    tl.to(".hero-intro",{
      opacity:1,
      duration:3,
      ease:"linear",
    })
    tl.to(".hero-image",{
      opacity:1,
      y:0,
      duration:3,
      ease:"linear",
    })
    
    
  });

  return (
    <div className="text-anime w-screen h-screen absolute z-30 flex justify-center items-center top-0 left-0 ">
      {Texts.map((item, i) => (
        <h1 key={i}
          className={`absolute md:text-[2rem] lg:text-[2.6rem] text-[1.5rem] font-medium font-sans text-foreground scale-0 text-${i} `}
        >
          {item.text}
        </h1>
      ))}
    </div>
  );
}
