import {
  NavBar,
  SideBar,
  Hero,
  About,
  Services,
  Skill,
  Projects,
  Testimonials,
  Contact,
  Footer,
  Theme
} from "@/components"

export default function Home(){
  return (
      <main className="pageContainer w-screen h-[100svh] bg-background ">
        <SideBar/>
        <NavBar/>
        <Hero/>
        <About/>
        <Services/>
        <Skill/>
        <Projects/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        <Theme/>
      </main>
    )
}