"use client"
import { 
  SectionTitle,
  Service,
  Section
} from "@/components";
import { serviceType, services } from "@/lib/data";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react"
import { SlowMo } from "gsap/EasePack";



export default function Sevices() {
  
 useGSAP(()=>{
   const tl= gsap.timeline({
        scrollTrigger:{
          trigger:`#service`,
          start:"top center",
        }
   })
   
   tl.to(".service-title",{
     scale:1,
     opacity:1,
     duration:2,
     ease:"slow(0.6,0.8)",
   })
   tl.to(".service-desc",{
     opacity:0.6,
     duration:2,
   })
   tl.to(".service-card",{
     opacity:1,
     y:0,
     duration:2,
     stagger:0.2
   })
 })
  
  
  
  return (
    <Section id="service">
      <div className="wrapper flex flex-col gap-6">
        
        {/*heading*/}
        <div className="flex flex-col gap-2 text-center justify-center mb-[2rem] ">
          <SectionTitle className="service-title">Services</SectionTitle>
          <p className="service-desc test-desc max-w-xl mx-auto text-center opacity-0">
            I transform your ideas, and consequently your desires, into a
            distinctive web project that both inspires you and captivates your
            customers.
          </p>
        </div>
        
        {/*body*/}
        <div className="grid w-full grid-cols-1 justify-center items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item:serviceType,i:number)=>(
             <Service data={item} key={i}/>
          ))}
        </div>
        
      </div>
    </Section>
  );
}
