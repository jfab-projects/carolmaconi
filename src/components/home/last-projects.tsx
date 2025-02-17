"use client";

import React from "react";
import { SectionTitle } from "../shared/section-title";
import { ButtonLink } from "../shared/button-link";
// import { useIsMobile } from "@/hooks/use-mobile";
import { projects } from "@/utils/data";
import { CardProject } from "../shared/card-project";
import HoverImageButton from "../shared/HoverImageButton";

export const LastProjects = () => {
  // const isMobile = useIsMobile();

  return (
    <section className="mt-36">
      <SectionTitle title="Portfolio" subtitle="Últimos Projetos" />

      {true ? (
        <ul className="mt-12 grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {projects.map((project, idx) => (
            <li className="mb-12" key={`cardProject-${project.name}-${idx}`}>
              <CardProject {...project} />
            </li>
          ))}
        </ul>
      ) : (
        // <ul className="mt-12">
        //   {projects.map((project) => (
        //     <li
        //       key={`project-${project.name}`}
        //       className="border-b border-t"
        //       onClick={() => console.log(project.name)}
        //     >
        //       <LinkPreview
        //         url="#"
        //         layout=""
        //         className="flex justify-between items-center gap-4 px-8 py-8"
        //         imageSrc={project.images[0]}
        //         isStatic
        //         width={350}
        //       >
        //         <h2>{project.name}</h2>
        //         <span className="text-lg">{project.type}</span>
        //       </LinkPreview>
        //     </li>
        //   ))}
        // </ul>
        <HoverImageButton />
      )}

      <div className="flex justify-center">
        <ButtonLink
          href="/projetos"
          className={true ? "mt-2" : "mt-16"}
          variant="ghost-black"
        >
          Ver Todos
        </ButtonLink>
      </div>
    </section>
  );
};
