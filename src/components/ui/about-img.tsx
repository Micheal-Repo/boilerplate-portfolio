"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Button } from "./movingBorder";
import Link from "next/link";

export default function AboutImage() {
  return (
    <CardContainer
    containerClassName="md:py-0 py-[1rem]"
    className="inter-var">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2] border-black/[0.1] w-auto h-auto">
        <CardItem as="div" translateZ="70">
          {" "}
          <Button
            containerClassName="w-[250px] h-[250px] p-[2px] shadow-lg "
            className="relative bg-backgroundMild border border-background"
            as="div"
            borderClassName="h-40 w-40"
          >
           <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-gradient blur-[23px] opacity-25"/>
           
            <div className="relative w-full h-full overflow-hidden relative z-10">
           
            <Image
              src="/Chosen.png"
              alt="chosen"
              width={250}
              height={300}
              className="object-cover scale-125"
            />
          </div>
          </Button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
