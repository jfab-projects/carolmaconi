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
          Inovação e Estilo: Seu Espaço, Sua Identidade,
          <b className="text-primary"> Nossa Arte</b>
        </h1>

        <p className="opacity-60 text-lg mb-10 max-lg:text-base">
          Descubra a harmonia entre forma e função em cada projeto. Somos
          apaixonados por criar ambientes excepcionais que refletem uma essência
          única. Da concepção à execução, estamos comprometidos em transformar
          ideias em realidade.
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
