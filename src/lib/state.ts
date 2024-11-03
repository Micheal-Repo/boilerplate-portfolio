import {create} from "zustand"

interface sideBarType{
  isOpen:boolean,
  setSideBar:(v:boolean)=> void
}

export const useSideBar=create<sideBarType>((set)=>({
  isOpen:false,
  setSideBar:(bool:boolean)=>set((state)=> ({isOpen:bool})),
}))