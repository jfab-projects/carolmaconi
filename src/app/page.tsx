import { About } from "@/components/home/about";
import { Hero } from "@/components/home/hero";
import { LastProjects } from "@/components/home/last-projects";
import { ServicesProvided } from "@/components/home/services-provided";

export default function HomePage() {
  return (
    <div className="max-w-7xl px-5 m-auto">
      <Hero />
      <ServicesProvided />
      <LastProjects />
      <About />
    </div>
  );
}
