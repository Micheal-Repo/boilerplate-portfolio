


export default function SectionTitle({
  children,
  className
}:{
  children:React.ReactNode,
  className?:string 
}){
  return (
      <h1 className={`opacity-0 scale-[4] text-[1.8rem] md:text-[2.5rem] text-gradient font-bold text-center ${className}`}>
        {children}
      </h1>
    )
}