"use client";
import { RiMenu3Fill } from "react-icons/ri";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import { IoMdClose } from "react-icons/io";
import { useRef, useState } from "react";
import { useSideBar } from "@/lib/state";

// absolute: true,
// spin: true,
// zIndex: 1000

gsap.registerPlugin(useGSAP, Flip);

export default function MenuToggle() {
  const setSideBar = useSideBar((state) => state.setSideBar);
  const isOpen = useSideBar((state) => state.isOpen);
  const [isOpen2,setIsOpen2] = useState(false)

  const [isReady, setIsReady] = useState(false);
  const container = useRef(null);

  const { contextSafe } = useGSAP(
    () => {
      if (!isReady) {
        setIsReady(true);
      }

      if (isReady) {
        gsap.set(".close", {
          yPercent: 120,
        });
      }
    },
    { dependencies: [isReady], scope: container }
  );

  const handleMenu = contextSafe(() => {
    let state = Flip.getState(".menu");

    if (!isOpen) {
      setSideBar(true);
      Swap(state);
      setTimeout(()=>{
        setIsOpen2(true)
      },500)
    } else {
      setSideBar(false);
      Reset();
      
      setTimeout(()=>{
        setIsOpen2(false)
      },500)
    }
  });

  function Swap(state: any) {
    const menu: any = document.querySelector(".menu");

    const finalCont: any = document.querySelector(".finalCont");

    finalCont.appendChild(menu);

    Flip.from(state, {
      duration: 1.5,
      spin: true,
      absolute: true,
      zIndex: 1000,
      ease: "back.inOut",
    });
  }

  function Reset() {
    const menu: any = document.querySelector(".menu");

    const initialCont: any = document.querySelector(".initialCont");

    menu.classList.add("opacity-0");

    setTimeout(() => {
      initialCont.appendChild(menu);
      menu.classList.remove("opacity-0");
    }, 1000);
  }

  return (
    <div
      ref={container}
      className="md:hidden initialCont w-[3rem] h-[3rem] flex justify-center items-center "
    >
      {isReady && (
        <div
          onClick={handleMenu}
          className="cursor-pointer transition-all duration-300 menu w-[3rem] h-[3rem] border border-background rounded-lg flex justify-center items-center relative overflow-hidden"
        >
          {!isOpen2 && <RiMenu3Fill className="open absolute" size={28} />}
          {isOpen2 && <IoMdClose className="close absolute" size={28} />}
        </div>
      )}
    </div>
  );
}
