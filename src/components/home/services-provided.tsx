import React from "react";
import { SectionTitle } from "../shared/section-title";
import Image from "next/image";
import AnimatedContent from "../animations/animated-content";

export const ServicesProvided = () => {
  return (
    <section className="mt-36">
      <SectionTitle title="Principais Serviços" subtitle="Serviços Prestados" />

      <ul className="mt-16 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        <li className="bg-none bg-transparent">
          <AnimatedContent delay={100} config={{ tension: 75, friction: 25 }}>
            <Image
              src="/services-provided/servico-1.jpg"
              alt="Projetos Arquitetônicos"
              width={400}
              height={400}
              className="w-full"
            />

            <div className="bg-white shadow-lg p-4 max-w-[84%] m-auto text-center relative -top-12">
              <h3 className="font-bold text-xl">Projetos Arquitetônicos</h3>
              <p className="opacity-60 mt-3">
                Desenvolvemos projetos arquitetônicos de alta qualidade,
                cuidando de cada detalhe para oferecer ambientes funcionais e
                esteticamente agradáveis.
              </p>
            </div>
          </AnimatedContent>
        </li>

        <li className="bg-none bg-transparent">
          <AnimatedContent delay={200} config={{ tension: 75, friction: 25 }}>
            <Image
              src="/services-provided/servico-2.jpg"
              alt="Projetos Arquitetônicos"
              width={400}
              height={400}
              className="w-full"
            />

            <div className="bg-white shadow-lg p-4 max-w-[84%] m-auto text-center relative -top-12">
              <h3 className="font-bold text-xl">Projetos de Interiores</h3>
              <p className="opacity-60 mt-3">
                Desenvolvemos projetos de interiores de alta qualidade, cuidando
                de cada detalhe para oferecer ambientes funcionais e
                esteticamente agradáveis.
              </p>
            </div>
          </AnimatedContent>
        </li>

        <li className="bg-none bg-transparent">
          <AnimatedContent delay={300} config={{ tension: 75, friction: 25 }}>
            <Image
              src="/services-provided/servico-3.jpg"
              alt="Projetos Arquitetônicos"
              width={650}
              height={650}
              className="w-full"
            />

            <div className="bg-white shadow-lg p-4 max-w-[84%] m-auto text-center relative -top-12">
              <h3 className="font-bold text-xl">Consultorias</h3>
              <p className="opacity-60 mt-3">
                Consultorias de arquitetura e interiores, oferecendo soluções
                personalizadas para cada projeto. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit.
              </p>
            </div>
          </AnimatedContent>
        </li>
      </ul>
    </section>
  );
};
