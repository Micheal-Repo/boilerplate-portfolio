"use client";
import { useState, useEffect, useRef } from "react";
import { useCountUp } from 'react-countup';

export default function Counter({
  endNumber,
  format,
  suffix,
  comment,
  startNo,
  decimal,
}: {
  endNumber: number,
  startNo: number,
  format: string,
  suffix: string,
  comment: string,
  decimal?: number,
}) {
  
 const targetRef = useRef(null);
 
  const { start, pauseResume, reset, update } = useCountUp({
    ref: targetRef,
    start: startNo,
    end: endNumber,
    duration:5,
    decimals: decimal ? decimal : 0,
  });
 
 useEffect(() => {
    const timeId = setTimeout(() => {
      start()
    }, 2000);

    return () => clearTimeout(timeId);
  }, [start]);
  
 
  return (
    <div className="relative opacity-0 translate-y-[2rem] hero-counter flex flex-col text-center gap-2 justify-center items-center">
      <div className="flex items-center font-bold text-[2rem] md:text-[2.5rem] lg:text-[3rem]">
        <p className="target" ref={targetRef}>
          0
        </p>
        <span>{suffix}</span>
      </div>

      <p className="text-[0.8rem]">{comment}</p>
    </div>
  );
}