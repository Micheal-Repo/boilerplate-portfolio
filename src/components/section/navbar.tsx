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

  
export default function NavBar(){
  
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