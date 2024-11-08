import {create} from "zustand"

interface sideBarType{
  isOpen:boolean,
  setSideBar:(v:boolean)=> void
}

export const useSideBar=create<sideBarType>((set)=>({
  isOpen:false,
  setSideBar:(bool:boolean)=>set((state)=> ({isOpen:bool})),
}))



interface activeNavType{
  activeNav:string,
  setActiveNav:(v:string)=> void
}

export const useActiveNav=create<activeNavType>((set)=>({
  activeNav:"home",
  setActiveNav:(nav:string)=>set((state)=> ({activeNav:nav})),
}))





interface themeType{
  isOpen:boolean,
  setIsOpen:(v:boolean)=> void
}

export const useTheme=create<themeType>((set)=>({
  isOpen:false,
  setIsOpen:(nav:boolean)=>set((state)=> ({isOpen:nav})),
}))



