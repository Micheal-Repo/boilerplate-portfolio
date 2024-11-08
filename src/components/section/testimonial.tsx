"use client"
import { 
  SectionTitle,
  Testimonial,
  Section
} from "@/components";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react"
import { SlowMo } from "gsap/EasePack";

export default function Testimonials() {
  
 useGSAP(()=>{
  const tl= gsap.timeline({
        scrollTrigger:{
          trigger:`#testimonial`,
          start:"top center",
        }
  })
   
  tl.to(".testimonial-title",{
    scale:1,
    opacity:1,
    duration:2,
    ease:"slow(0.6,0.8)",
  })
  tl.to(".testimonial-desc",{
    opacity:0.6,
    duration:2,
    ease:"power2.inOut",
  })
  tl.to(".testimonial-cards",{
    opacity:1,
    duration:2,
    ease:"power2.inOut",
  })

 })
  
  
  
  return (
    <Section id="testimonial">
      <div className="wrapper flex flex-col gap-6">
        
        {/*heading*/}
       <div className="flex justify-center flex-col items-center gap-3 text-center">
          <SectionTitle className="testimonial-title">Testimonials</SectionTitle>
          
          <p className="text-desc testimonial-desc opacity-0 max-w-2xl">
            Discover what client are saying concerning their experiences working with me as their trusted web developer from startup to established business, my dedication to crafting exceptional online experience shines through in their words
          </p>
       </div>
      
        
        {/*body*/}
        <div className="testimonial-cards w-full opacity-0 mt-[1.5rem]">
          <Testimonial/>
        </div>
      </div>
    </Section>
  );
}
