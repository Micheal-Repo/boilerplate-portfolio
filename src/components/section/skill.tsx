"use client"
import { 
  SectionTitle,
  SkillSet,
  Section
} from "@/components";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react"
import { SlowMo } from "gsap/EasePack";
import {skills,skillType} from "@/lib/data"


export default function Sevices() {
  
 useGSAP(()=>{
  const tl= gsap.timeline({
        scrollTrigger:{
          trigger:`#skill`,
          start:"top center",
        }
  })
   
  tl.to(".skill-title",{
    scale:1,
    opacity:1,
    duration:2,
    ease:"slow(0.6,0.8)",
  })
  tl.to(".skill-card",{
    opacity:1,
    y:0,
    duration:2,
    stagger:0.2
  })
 })
  
  
  
  return (
    <Section id="skill">
      <div className="wrapper flex flex-col gap-6">
        
        {/*heading*/}
          <SectionTitle className="skill-title mb-[2rem]">My Skills </SectionTitle>
      
        
        {/*body*/}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((item:skillType,i: number)=>(
            <SkillSet
             key={i}
             data={item}
            />
          ))}
        </div>
        
      </div>
    </Section>
  );
}
