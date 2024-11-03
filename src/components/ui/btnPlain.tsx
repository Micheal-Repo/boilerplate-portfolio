

export default function BtnPlain({
  children,
  className
}:{
  children:React.ReactNode,
  className?:string
}){
  return (
      <button className={`outline-0 border-0 px-6 py-3 sm:px-14  bg-backgroundMild shadow-lg rounded-full text-foreground text-[1rem] transition-all duration-300 hover:scale-90 cursor-pointer select-none font-medium ${className ? className : ""}`}>
        {children}
      </button>
    )
}