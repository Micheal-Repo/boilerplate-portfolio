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
  Theme,
  ScrollTop
} from "@/components"

export default function Home(){
  return (
    <>
    
      <main className="pageContainer w-screen h-[100svh] bg-background ">
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
        <SideBar/>
        <ScrollTop/>
      </main>
    </>
    )
}