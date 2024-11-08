
import Image from "next/image";
import {
   GridBackground,
   Counter,
   BtnPlain,
  Section,
  IntroAnimation
} from "@/components";


export default function Hero() {

  return (
    <Section id="home">
      <GridBackground />
      <IntroAnimation />
      
      <div className="relative z-10 mt-[8rem] wrapper flex md:items-center flex-col md:flex-row md:justify-between ">
        {/*left*/}
        <div className="md:w-[55%] w-full flex flex-col gap-6 md:items-start items-center max-md:text-center">
          <p className="opacity-0 hero-intro lg:text-[1.5rem] flex items-center gap-2 font-sans">
            <span>Hello dear! I'm</span>
            <span className="text-gradient uppercase font-semibold">
              Eqwin Chosen
            </span>
          </p>

          <h1 className="opacity-0  scale-[2] text-hero text-gradient  uppercase font-bold font-sans lg:text-[4rem] text-[2.5rem] md:text-[3.5rem]">
            I'm a web Developer
          </h1>

          <p className="relative translate-y-[1rem] hero-desc max-w-[40rem]  text-foreground opacity-0">
            I dissect intricate User experience challenges to engineer integrity
            focused solutions that resonant with billions of user
          </p>

          {/*counter*/}
          <div className="flex items-center gap-6">
            <Counter
              format="dd"
              endNumber={10}
              startNo={0}
              suffix="+"
              comment="Years Of My Experience"
            />
            <Counter
              format="dd"
              endNumber={150}
              startNo={0}
              suffix="+"
              comment="Completed Projects"
            />
            <Counter
              format="d.d"
              endNumber={2.5}
              startNo={0}
              decimal={1}
              suffix="k"
              comment="Satisfied Customer"
            />
          </div>
          
          
          {/*btn*/}
          <div className="mt-[2rem] flex gap-6 sm:gap-10 items-center max-md:w-full max-md:justify-center">
            <BtnPlain className="hero-btn opacity-0 scale-0">
              Download CV
            </BtnPlain>
            <BtnPlain className="hero-btn opacity-0 scale-0">
              Email me
            </BtnPlain>
          </div>
        </div>

        {/*right*/}
        <div className="md:w-[45%] w-full lg:h-full flex justify-center items-center max-md:mt-[3.5rem]">
          
          <div className="relative hero-image opacity-0 -translate-y-[2rem] lg:scale-110 w-[300px] h-[400px] overflow-hidden relative rounded-b-full">
            <div className="bg-gradient-to-b from-transparent via-transparent to-background absolute z-10 inset-0 " />

            <Image
              src="/Chosen.png"
              alt="chosen"
              width={300}
              height={350}
              className="mt-[1rem] object-cover scale-150"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
