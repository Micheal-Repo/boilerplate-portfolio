"use client"
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import {useState} from "react"
import { Flip } from "gsap/Flip";
import {useCallback} from "react"

export default function ProjectNav({
  activeNav,
  setActiveNav
}:{
  activeNav:string,
  setActiveNav:(t:string)=>void
}){
  const [position,setPosition] = useState(0)
  const nav=["All","Web","UI/UX","Apps"]
  
  
 const {contextSafe} = useGSAP(()=>{
    gsap.to(".projectNavIndicator",{
      x:`${position}rem`,
      duration:1,
      ease:"back.inOut"
    })
  },{dependencies:[position]})
  
  
  
  const handleNavClick=useCallback((nav:string,pos: number)=>{
    
    const state = Flip.getState(".project-card")
    
    setActiveNav(nav)
    setPosition(pos)
    
    Flip.from(state, {
      duration: 3,
      ease: "power2.inOut",
      stagger: 0.1,
    });
    
  },[setActiveNav])
  
  return (
      <div className="projectNav opacity-0 scale-[0.6] relative bg-backgroundMild shadow-lg rounded-full overflow-hidden w-[20rem] mx-auto">
        <div className="projectNavIndicator w-[5rem] h-[3.5rem] absolute top-0 left-0 bg-gradient rounded-full"/>
        
        <div className="relative z-10 w-full flex items-center">
          {nav.map((item,i)=>(
           <div onClick={()=> handleNavClick(item,i*5)} key={i} className={`w-[5rem] h-[3.5rem] flex justify-center items-center text-[1rem] font-semibold hover:opacity-100 transition-all duration-300
           `}>
              <p className={`${activeNav === item ? "text-white opacity-100" : "text-foreground opacity-60"}`}>{item}</p>
           </div>
          ))}
        </div>
        
      </div>
    )
}