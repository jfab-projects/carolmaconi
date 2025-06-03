import { CardProject } from "@/components/shared/card-project";
import { TitlePage } from "@/components/shared/title-page";
import { projects } from "@/utils/all-projects";

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
          <li className="mb-12" key={`cardProject-${project.name}-${idx}`}>
            <CardProject {...project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
