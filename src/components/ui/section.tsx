"use client"
import {cn} from "@/lib/utils"
import {useEffect,useRef} from "react"
import { useInView } from "framer-motion";
import {useActiveNav} from "@/lib/state"

export default function Section({
  id,
  children,
  className
}:{
  id:string,
  children: React.ReactNode,
  className?: string 
}){
  
  const setActiveNav = useActiveNav((state)=> state.setActiveNav)
  
  const ref = useRef(null)
  const isInView = useInView(ref,{
    amount:0.5
  })
  
  useEffect(()=>{
    if(isInView){
      
      setActiveNav(id)
    }
  },[isInView])
  
  return (
      <section 
        id={id}
        ref={ref}
        className={cn('overflow-hidden main section bg-background relative',className)}
      >
        {children}
      </section>
    )
}