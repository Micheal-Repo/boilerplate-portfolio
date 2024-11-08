"use client"
import { FaArrowUp } from "react-icons/fa6";
import {useEffect,useState} from "react"
import {AnimatePresence,motion} from "framer-motion"


export default function ScrollTop(){
  const [isVisible,setIsVisible] = useState(false)
  
  function handleScroll(){
    if(window.scrollY > 50){
      setIsVisible(true)
    }else{
      setIsVisible(false)
    }
  }
  
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll)
    
    return ()=> {
      window.removeEventListener("scroll",handleScroll)
    }
  },[])
  
  
  function ScrollToTop(){
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  
  return (
    <AnimatePresence>
      {isVisible && 
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      onClick={ScrollToTop}
      className="z-30 fixed md:left-[2rem] md:bottom-[2rem] left-[1rem] bottom-[1rem] w-[3rem] md:h-[3.5rem] md:w-[3.5rem] h-[3rem] rounded-full bg-gradient  shadow-lg flex justify-center items-center font-bold text-white hover:scale-90 transition-all duration-300">
        <FaArrowUp size={28}/>
      </motion.div>
      }
    </AnimatePresence>
    )
}