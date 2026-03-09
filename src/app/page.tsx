import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
