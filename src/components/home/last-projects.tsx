"use client";

import React from "react";
import { SectionTitle } from "../shared/section-title";
import { ButtonLink } from "../shared/button-link";

import { CardProject } from "../shared/card-project";
import { projects } from "@/utils/home-projects";

export const LastProjects = () => {
  return (
    <section className="mt-36">
      <SectionTitle title="Portfolio" subtitle="Projetos" />

      <ul className="mt-12 grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
        {projects.map((project, idx) => (
          <li className="mb-10" key={`cardProject-${project.name}-${idx}`}>
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
