import {skillType} from "@/lib/data"
import { HiCheckBadge } from "react-icons/hi2";
//<HiCheckBadge />
import { RiShieldCheckFill } from "react-icons/ri";

export default function Skill({
  data
}:{
  data:skillType
}){
  return (
      <div className="opacity-0 translate-y-[2rem] skill-card w-full max-sm:w-full max-md:w-[90%] mx-auto bg-backgroundMild border h-[25rem] transition-all duration-300 border-backgroundMild hover:border-primary hover:bg-background flex px-4 py-6 rounded-2xl shadow-lg flex-col gap-6">
        
        {/*heading*/}
        <h3 className="text-gradient text-[1.5rem] font-semibold text-center">{data.title}</h3>
        
       {/*body*/}
       <div className="w-full px-2 grid grid-cols-2 gap-4">
         
         {data.list.map((item,i)=>(
           <div key={i} className="flex gap-3 items-center mb-[1.2rem]">
             <RiShieldCheckFill className="text-primary text-[1.5rem]"/>
             <div className="flex flex-col text-left">
               <h3 className="text-[1.2rem] font-medium">{item.skill}</h3>
               <p className="text-[1rem] opacity-[0.6]">{item.expert ? "Experienced" : "Intermediate"}</p>
             </div>
           </div>
         ))}
         
       </div>
        
      </div>
    )
}