import { cn } from "@/lib/utils"

export default function Button({
  children, 
  className, 
  onClick,
  icon,
  iconPosition
}:{
  children: React.ReactNode,
  className?: string,
  onClick?:()=> void,
  icon?: React.ReactNode,
  iconPosition?:string,
}){
  return (

        <button className={cn("bg-gradient font-semibold text-[1.3rem] rounded-full px-6 py-2 flex items-center gap-3 cursor-pointer hover:scale-90 transition-all duration-300 text-white",
          className
        )}>
          {iconPosition && iconPosition == "left" && icon}
          {children}
          {iconPosition && iconPosition == "right" && icon}
        </button>
    )
}