import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Process from "@/components/process";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Process />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
