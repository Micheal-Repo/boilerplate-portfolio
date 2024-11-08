"use client"
import { 
  SectionTitle,
  Testimonial,
  Button,
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
          trigger:`#contact`,
          start:"top center",
        }
  })
   
  tl.to(".contact-title",{
    scale:1,
    opacity:1,
    duration:2,
    ease:"slow(0.6,0.8)",
  })
  tl.to(".contact-desc",{
    opacity:0.6,
    duration:2,
    ease:"power2.inOut",
  })
  tl.to(".contact-card",{
    opacity:0.6,
    duration:2,
    ease:"power2.inOut",
  })

 })
  
  
  
  return (
    <Section id="contact">
      <div className="wrapper flex flex-col gap-6">
        
        {/*heading*/}
       <div className="flex justify-center flex-col items-center gap-3 text-center">
         
          <SectionTitle className="contact-title">Contact Me</SectionTitle>
          
          <p className="contact-desc text-desc opacity-0 max-w-2xl">
            Ready to take your digital presence to the next level? whether you are looking to lunch a new business, or revamp an existing one, or need expert advice on the best web technologies, i am here for you. Reach out to discuss your project, ask your questions or just say hello
          </p>
       </div>
      
        
        {/*body*/}
        <div className="contact-card opacity-0 w-full flex flex-col gap-6 max-w-2xl mx-auto mt-[2rem]">
           <input
            type="text"
            placeholder="Your full name"
            className="shadow-md w-full text-foreground bg-backgroundMild p-6 rounded-2xl focus:bg-background border border-background focus:border-primary transition-all duration-300 outline-0 "
           />
           <input
            type="text"
            placeholder="Your full name"
            className="w-full text-foreground bg-backgroundMild shadow-md p-6 rounded-2xl focus:bg-background border border-background focus:border-primary transition-all duration-300 outline-0 "
           />
           <textarea
            placeholder="Your Message"
            className="w-full shadow-md text-foreground bg-backgroundMild p-6 rounded-3xl focus:bg-background border border-background focus:border-primary transition-all duration-300 outline-0 h-[18rem]"
           />
           <Button
            className="w-full flex justify-center items-center font-semibold rounded-full text-[1.2rem] p-5"
           >
             Send Message 
           </Button>
        </div>
      </div>
    </Section>
  );
}
