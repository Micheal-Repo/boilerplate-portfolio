
import Link from "next/link"
import {navLinksType} from "@/lib/data"

export default function NavLink({
  item
}:{
  item:navLinksType
}){
  return (
      <li className="relative navBarLink">
        <Link href={item.href} className="px-4 py-2 font-sans lg:text-[1.1rem] md:text-[0.9rem]  font-medium max-lg:px-2">
          {item.link}
        </Link>
        <span  className={`linkMarker transition-all duration-300 navMarker absolute -bottom-3 left-0 w-0 h-1 rounded-full bg-gradient ${item.link.toLowerCase()}`}></span>
      </li>
    )
}