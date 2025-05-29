import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { ButtonLink } from "../shared/button-link";

export const Hero = () => {
  return (
    <main className="mt-16 flex items-center gap-5 max-[1060px]:flex-col max-[1060px]:text-center">
      <div className="max-w-[580px]">
        <h1 className="font-bold mb-5">
          Seu Espaço com Estilo e <b className="text-primary">Personalidade </b>
        </h1>

        <p className="opacity-60 text-lg mb-10 max-lg:text-base">
          Cada projeto é único porque cada pessoa é única. Unimos criatividade,
          técnica e sensibilidade para criar ambientes que refletem quem você é,
          funcionais, bonitos e feitos com carinho, do começo ao fim.
        </p>

        <div className="flex items-center gap-4 max-[1060px]:justify-center">
          <ButtonLink href={"/contato"} icon={<MoveUpRight size={18} />}>
            Contato
          </ButtonLink>
          <Link
            href="/projetos"
            className="font-bold underline underline-offset-4 hover:text-primary transition"
          >
            Ver Projetos
          </Link>
        </div>
      </div>

      <Image
        src="/hero-cmarq.png"
        alt="Casa com árvores em volta"
        width={850}
        height={650}
        className="w-full max-w-[700px] max-lg:mt-10"
      />
    </main>
  );
};
