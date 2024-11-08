import { TbWriting } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";

import {
  serviceType
} from "@/lib/data"
import {
  Button
} from "@/components"

export default function Service({
  data
}:{
  data:serviceType
}){
  
  return (
      <div className="shadow-lg opacity-0 translate-y-[2rem] service-card w-full max-sm:w-full max-md:w-[90%] max-md:mx-auto flex flex-col gap-6 p-6 rounded-2xl bg-backgroundMild border-backgroundMild border hover:bg-background transition-all duration-300 hover:border-primary">
        
        {/*Heading*/}
        <div className="flex md:flex-row items-center w-full flex-col-reverse justify-center gap-3 ">
          
         <div className="w-[3.5rem] h-[3.5rem] flex justify-center items-center rounded-full border-[1px] text-[1.6rem] text-primary border-primary">
          {data.icon === "design" && <FaPaintBrush className=""/>}
          {data.icon === "code" && <FaCode className="" />}
          {data.icon === "content" && <TbWriting className=""/>}
         </div>
        <h3 className="text-gradient text-[1.4rem] font-semibold">
          {data.name}
        </h3>
      </div>
      
      {/*Body*/}
      <p className="text-desc text-opacity text-center my-3">
        {data.desc}
      </p>
      
      {/*btn*/}
      <div className="w-full flex justify-center items-center">
       <Button
        className="text-[1rem] font-medium rounded-full"
       >
         Read more
       </Button>
      </div>
      </div>
    )
}