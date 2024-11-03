"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useSideBar } from "@/lib/state";
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import {useRef,useEffect} from "react"
import { Flip } from "gsap/Flip";
import {
  navLinks, 
  navLinksType
} from "@/lib/data"
import {
  SideBarLink,
  Button
} from "@/components"
import { Send } from 'lucide-react';


export default function SideBar() {
  const isOpen = useSideBar((state) => state.isOpen);
  
  
  useEffect(()=>{
    const Links = document.querySelectorAll(".sideBarLink")
   
   Links.forEach((item,i)=>{
     item.addEventListener("mouseenter",()=> handleEnter(i))
     item.addEventListener("mouseleave",()=> handleLeave(i))
   })
    
  },[])
  
  function handleEnter(i:number){
    const markers:any = document.querySelectorAll(".marker")
    
     markers[i].style.width = "100%"
 }
 
  function handleLeave(i:number){
    const markers:any = document.querySelectorAll(".marker")
    
     markers[i].style.width = "0"
 }
  
  
  useGSAP(()=>{
     
     if(isOpen){
       gsap.to(".sidebar",{
         x:"20rem",
         duration:0.8,
         ease:"back.inOut"
       })
       gsap.to(".sidelink",{
         x:"14rem",
         duration:1.5,
         ease:"back.inOut",
         stagger:0.2
       })
     }else{
       gsap.to(".sidebar",{
         x:0,
         duration:0.8,
         ease:"back.inOut"
       })
       gsap.to(".sidelink",{
         x:0,
         duration:1.5,
         ease:"back.inOut",
         stagger:0.2
       })
     }
   },{dependencies:[isOpen]})
  
  
  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
            }}
            className="md:hidden z-30 fixed bg-black/[0.6] inset-0"
          />
        )}
      </AnimatePresence>

      <div className="md:hidden z-40 sidebar fixed top-0 left-[-20rem] h-screen w-[20rem] bg-backgroundMild shadow flex flex-col ">
        
        {/*close icon*/}
        <div  className="w-full p-4 flex justify-end ">
          
           <div className="relative finalCont w-[3.5rem] h-[3rem] flex justify-center items-center"/>
           
          </div>
          
          
           {/*links*/}
           <div className="flex flex-col w-full">
             {navLinks.map((item,i)=>(
               <SideBarLink
                key={i}
                navLink={item}
               />
             ))}
           </div>
           
           {/*hire me*/}             <Button
               icon={<Send />}
               iconPosition="right"
               className="w-[70%] mt-[3rem] mx-auto rounded-full text-center flex justify-center items-center"
             >
               Hire me
             </Button>

      </div>
    </div>
  );
}
