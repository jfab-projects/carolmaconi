import { About } from "@/components/home/about";
import { Hero } from "@/components/home/hero";
import { LastProjects } from "@/components/home/last-projects";
import { ServicesProvided } from "@/components/home/services-provided";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Projetos personalizados de arquitetura em Lençóis Paulista. A arquiteta Carol Maconi transforma espaços com criatividade, técnica e sensibilidade. Conheça nossos serviços.",
  alternates: {
    canonical: "https://carolmaconi.com.br/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl px-5 m-auto">
        <ServicesProvided />
        <LastProjects />
        <About />
      </div>
    </>
  );
}
