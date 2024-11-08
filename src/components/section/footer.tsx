"use client"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react"
import {
  navLinksType,
  navLinks 
} from "@/lib/data"
import Link from "next/link"

export default function Testimonials() {
  
 useGSAP(()=>{
  const tl= gsap.timeline({
        scrollTrigger:{
          trigger:`#contact`,
          start:"top center",
        }
  })
   
  tl.to(".footer-link",{
    scale:1,
    opacity:0.7,
    duration:2,
    ease:"back.inOut",
    stagger:0.2
  })
  tl.to(".footer-copyright",{
    opacity:1,
    duration:2,
    ease:"power2.inOut",
  })
  tl.to(".footer-text",{
    opacity:0.6,
    duration:2,
    ease:"power2.inOut",
  })
 })
  
  
  
  return (
    <section id="footer" className="main section bg-background">
      <div className="mt-4 wrapper flex flex-col gap-4  justify-center items-center text-center">
        
        {/*link*/}
        <div className="w-full flex flex-col justify-center items-center gap-6  md:flex-row ">
          {navLinks.map((item,i)=>(
           <Link key={i} href={item.href}
             className="footer-link text-[1rem] md:text-[1.1rem] opacity-0 scale-0 transition-all duration-300 hover:opacity-100  text-foreground"
           >
              {item.link}
           </Link>
          ))}
        </div>
       
       <p className="footer-copyright mt-[2rem] opacity-0 font-semibold text-[1.2rem]">Copyright ©️ All right reserve -| 2024 </p>
       <p className="footer-text opacity-0">Build with love By Ezeogu Aloysius</p>
      </div>
    </section>
  );
}
