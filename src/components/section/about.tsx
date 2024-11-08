"use client"
import{
  AboutImage,
  SectionTitle,
  Section
} from "@/components"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react"
import { SlowMo } from "gsap/EasePack";

gsap.registerPlugin(ScrollTrigger,SlowMo) 
export default function About(){

 useGSAP(()=>{
   const tl= gsap.timeline({
        scrollTrigger:{
          trigger:`#about`,
          start:"top center",
        }
   })
   
   tl.to(".about-title",{
     scale:1,
     opacity:1,
     duration:2,
     ease:"slow(0.6,0.8)",
   })
   tl.to(".about-img",{
     y:0,
     opacity:1,
     duration:2,
     ease:"back.inOut",
   })
   tl.to(".about-desc",{
     opacity:0.6,
     duration:2,
   })
 })

return (
      <Section id="about" className="bg-backgroundMild">
        
        <div className="wrapper flex flex-col gap-4">
          
         <SectionTitle 
          className="about-title"
         >
           About Me
         </SectionTitle>
       
       <div className="w-full flex justify-center items-center gap-4 md:gap-12 flex-col md:flex-row">
         
         {/*left*/}
        <div className="about-img opacity-0 -translate-y-[1.5rem] relative">
          <AboutImage/>
        </div>
        
         {/*right*/}
        <p className="about-desc opacity-0 text-center md:text-left text-desc max-w-xl lg:max-w-2xl">
         Experienced Full Stack Developer with a passion for creating dynamic, intuitive, and responsive applications. Proficient in multiple programming languages and frameworks, as well as database design and management. Strong problem-solving and analytical skills, and a track record of delivering high-quality code on time and on budget.
        </p>
       </div>
       
       
        </div>
      </Section>
    )
}