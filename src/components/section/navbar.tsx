"use client"
import  {
  ModeToggle,
  Button,
  Logo,
  NavLink,
  MenuToggle,
  ThemeHandler
} from "@/components"
import {
  navLinks, 
  navLinksType
} from "@/lib/data"
import {useEffect} from "react"
import { Send } from 'lucide-react';
import {useScroll,motion,useSpring} from "framer-motion" 

  
export default function NavBar(){
  const {scrollYProgress} = useScroll()
  const scaleX = useSpring(scrollYProgress)
  
  
  
  useEffect(()=>{
    const Links = document.querySelectorAll(".navBarLink")
   
   Links.forEach((item,i)=>{
     item.addEventListener("mouseenter",()=> handleEnter(i))
     item.addEventListener("mouseleave",()=> handleLeave(i))
   })
    
  },[])
  
  function handleEnter(i:number){
    const markers:any = document.querySelectorAll(".navMarker")
    
     markers[i].style.width = "100%"
 }
 
  function handleLeave(i:number){
    const markers:any = document.querySelectorAll(".navMarker")
    
     markers[i].style.width = "0"
 }
  

  return (
      <nav className="z-20 fixed top-0 main bg-backgroundMild shadow-lg">
       
       <motion.div 
         className="absolute left-0 h-1 bottom-0 z-20  rounded-full bg-gradient w-full origin-left shadow-lg shadow-primary "
         style={{scaleX}}
       />
       
        <div className="wrapper flex justify-between items-center py-4 max-md:py-3">
          <Logo/>
          
          {/*navLinks*/}
          <ul className="list-none flex items-center gap-3 max-lg:gap-2 max-md:hidden">
            {navLinks.map((item,i)=>(
                <NavLink
                  item={item}
                  key={i}
                />
            ))}
          </ul>
          
          
          {/*Action*/}
           <div className="flex items-center gap-4">
             <Button
               icon={<Send />}
               iconPosition="right"
               className="max-lg:px-4 max-lg:text-[1.1rem] max-md:hidden"
             >
               Hire me
             </Button>
             
              <ModeToggle/>
              <ThemeHandler/>
              <MenuToggle/>
           </div>
          {/*Action*/}
           
        </div>
      </nav>
    )
}








// const { scrollYProgress } = useScroll()
// const scaleX = useSpring(scrollYProgress)

// return <motion.div style={{ scaleX }} />