"use client";

import React from "react";
import { SectionTitle } from "../shared/section-title";
import { ButtonLink } from "../shared/button-link";
import { projects } from "@/utils/data";
import { CardProject } from "../shared/card-project";

export const LastProjects = () => {
  return (
    <section className="mt-36">
      <SectionTitle title="Portfolio" subtitle="Últimos Projetos" />

      <ul className="mt-12 grid grid-cols-2 gap-5 max-md:grid-cols-1">
        {projects.map((project, idx) => (
          <li className="mb-12" key={`cardProject-${project.name}-${idx}`}>
            <CardProject {...project} />
          </li>
        ))}
      </ul>

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
