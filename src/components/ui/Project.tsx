
import {projectType} from "@/lib/data"
import {motion} from "framer-motion"
import Image from "next/image"
import{
  Button
} from "@/components"

export default function Project({
  data
}:{
  data:projectType
}){
  return (
     
        <div
         
         className=" w-full max-sm:w-full max-md:w-[90%] mx-auto rounded-2xl shadow-lg overflow-hidden bg-backgroundMild"
        >
          
          {/*image*/}
          <div className="rounded-lg w-full overflow-hidden h-[250px]">
            <Image
             src={data.img}
             alt={data.title}
             width={300}
             height={350} 
             className="w-full object-cover"
            />
          </div>
          
          {/*content*/}
          <div className="p-4 md:px-6 flex flex-col text-left gap-3">
            <h2 className="text-[1.1rem] font-semibold">{data.title}</h2>
            
            <p className="text-[1rem] opacity-60">
               {data.desc}
            </p>
          </div>
          
          {/*button*/} 
          <div className="my-[2rem] w-full flex justify-center items-center">
            <Button className="text-[1rem]">
              View Demo
            </Button>
          </div>
          
        </div>
    )
}