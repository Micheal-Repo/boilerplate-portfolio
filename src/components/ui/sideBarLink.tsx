"use client"
import Link from "next/link"
import {
  navLinksType
} from "@/lib/data"
import {useEffect} from "react"
import {useActiveNav} from "@/lib/state"

export default function SideBarLink({
  navLink
}:{
  navLink:navLinksType
}){
  const activeNav = useActiveNav((state)=> state.activeNav)
  
  
  return (
      <div className="sideBarLink relative w-full h-[4rem]">
        <Link href={navLink.href} className="sidelink px-[3rem] relative left-[-14rem] font-sans text-[1.2rem] font-semibold w-full h-full flex items-center">
          {navLink.link}
       
        </Link>
        <span className={` marker absolute bottom-0 left-0 transition-all duration-300 h-1 rounded-full bg-gradient ${activeNav === navLink.track ? "w-full" : "w-0"}`}></span>
      </div>
    )
}