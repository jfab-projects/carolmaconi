import AnimatedContent from "@/components/animations/animated-content";
import { CardProject } from "@/components/shared/card-project";
import { TitlePage } from "@/components/shared/title-page";
import { projects } from "@/utils/all-projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos de Arquitetura",
  description:
    "Conheça os projetos residenciais, comerciais e interiores criados por Carol Maconi, arquiteta em Lençóis Paulista.",
  alternates: {
    canonical: "https://carolmaconi.com.br/projetos",
  },
};

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl px-5 m-auto mb-16">
      <TitlePage title="Projetos" />

      {/* <div className="flex flex-wrap gap-2">
        <Button>Todos</Button>
        <Button variant="ghost">Interiores</Button>
        <Button variant="ghost">Arquitetônicos</Button>
      </div> */}

      <ul className="mt-5 grid grid-cols-2 gap-5 max-md:grid-cols-1">
        {projects.map((project, idx) => (
          <AnimatedContent key={`cardProject-${project.name}-${idx}`}>
            <li className="mb-12">
              <CardProject {...project} />
            </li>
          </AnimatedContent>
        ))}
      </ul>
    </div>
  );
}
