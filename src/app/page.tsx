import {
  NavBar,
  SideBar,
    Hero,
  About,
  Skill,
  Projects,
  Testimonial,
  Contact
} from "@/components"

export default function Home(){
  return (
      <main className="pageContainer w-screen h-[100svh] bg-background ">
        <SideBar/>
        <NavBar/>
        <Hero/>
        <About/>
        <Skill/>
        <Projects/>
        <Testimonial/>
        <Contact/>
      </main>
    )
}