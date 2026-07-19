import { getProjects } from "@/lib/api";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import LatestThoughts from "@/components/LatestThoughts";
import Footer from "@/components/Footer";

export default async function Home() {
  const projects = await getProjects();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects projects={projects} />
        <LatestThoughts />
      </main>
      <Footer />
    </>
  );
}
