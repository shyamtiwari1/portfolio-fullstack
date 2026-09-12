import { getProjects } from "@/lib/api";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import LatestThoughts from "@/components/LatestThoughts";
import Now from "@/components/Now";
import Footer from "@/components/Footer";

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects projects={projects} />
        <Skills />
        <LatestThoughts />
        <Now />
      </main>
      <Footer />
    </>
  );
}
