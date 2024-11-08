"use client";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosColorPalette } from "react-icons/io";
import { useTheme } from "@/lib/state";
import { IoMdClose } from "react-icons/io";
import { Button } from "@/components";
import {useState,useEffect} from "react"



export function Theme() {
  const { isOpen, setIsOpen } = useTheme((state) => state);
  const [themes,setThemes] = useState<string>("color-1")
  
  useEffect(()=>{
    let raw:any= localStorage.getItem('primaryColor')
    let theme:any = JSON.parse(raw)
    
    if(theme){
      updateTheme(theme)
    }
  },[])
  
  

  interface colorType {
    color?: string;
    name?: string;
    linear?: string;
  }
  const colors: colorType[] = [
    {
      name:"color-1",
      color: "linear-gradient(90deg,hsla(78, 84%, 20%, 1) 0%,hsla(48, 70%, 58%, 1) 100%)",
      linear:"hsla(48, 70%, 50%, 1)"
    },
    {
      name:"color-2",
      color: "linear-gradient(90deg, hsla(277, 74%, 24%, 1) 0%, hsla(185, 64%, 51%, 1) 100%)",
      linear:"hsla(185, 64%, 51%, 1)"
    },
    {
      name:"color-3",
      color: "linear-gradient(90deg, hsla(329, 20%, 24%, 1) 0%, hsla(323, 91%, 51%, 1) 100%)",
      linear:"hsla(323, 91%, 51%, 1)"
    },
    {
      name:"color-4",
      color: "linear-gradient(90deg, hsla(307, 70%, 28%, 1) 0%, hsla(321, 62%, 76%, 1) 100%)",
      linear:"hsla(321, 62%, 76%, 1)"
    },
    {
      name:"color-5",
      color: "linear-gradient(90deg,hsla(202, 71%, 27%, 1)  0%,   hsla(213, 51%, 71%, 1) 100%)",
      linear:"hsla(213, 51%, 71%, 1)"
    },
    {
      name:"color-6",
      color: "linear-gradient(90deg, hsla(0, 65%, 23%, 1) 0%, hsla(79, 51%, 71%, 1) 100%)",
      linear:"hsla(79, 51%, 71%, 1)"
    },
  ];

  function handleClick() {
    setIsOpen(false);
  }
  
  
  function handleChangeColor(item:colorType){
    
    updateTheme(item)
    localStorage.setItem('primaryColor', JSON.stringify(item));
    
}


function updateTheme(theme:any){
  setThemes(theme.name)
  
   let light:any = document.documentElement
   let dark: any = document.querySelector(".dark")
 
 if(light){
   light.style.setProperty('--primary-color', theme.linear);
  
  light.style.setProperty('--gradient', theme.color);
 }
  
 
 if(dark){
   dark.style.setProperty('--primary-color', theme.linear);
   
  dark.style.setProperty('--gradient', theme.color);
 }
    
}


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
          }}
          className="z-40 fixed bg-black/[0.6] inset-0 flex justify-center items-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{
              duration: 1,
              type: "spring",
            }}
            className="w-[90%] mx-auto max-w-xl rounded-2xl bg-backgroundMild shadow-lg"
          >
            <div className="flex justify-between items-center p-6 w-full border-b border-background text-foreground">
              <p className="font-semibold text-[1.2rem] font-foreground capitalize">
                select primary color
              </p>
              <IoMdClose onClick={handleClick} size={30} />
            </div>

            <h1 className="uppercase text-center my-4 text-[2.5rem] md:text-[3rem] font-bold text-gradient">
                Wonderful
            </h1>

            <div className="w-full md:pb-[3rem] pb-[2rem]  px-[2rem] flex gap-8 justify-center flex-wrap items-center">
              {colors.map((item, i) => (
                <div onClick={()=> handleChangeColor(item)} key={i} className={`w-[5rem] h-[5rem] rounded-full p-1 hover:border-primary border  transition-all duration-300 ${themes === item.name ? "border-primary" : "border-backgroundMild"}`}>
                  <div
                    style={{
                      background:`${item.color}`,
                    }}
                    className="w-full h-full rounded-full"
                  />
                </div>
              ))}
            </div>

          
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ThemeHandler() {
  const { setIsOpen } = useTheme((state) => state);

  function handleClick() {
    setIsOpen(true);
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer transition-all duration-300 w-[2.5rem] h-[2.5rem] border border-background rounded-lg flex justify-center items-center relative overflow-hidden text-foreground bg-background"
    >
      <IoIosColorPalette size={28}/>
    </div>
  );
}







