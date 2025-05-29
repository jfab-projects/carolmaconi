import Image from "next/image";
import { SectionTitle } from "../shared/section-title";
import Link from "next/link";

export const About = () => {
  return (
    <section className="mt-36 grid grid-cols-2 max-lg:grid-cols-1">
      <div className="bg-primary p-20 max-md:p-10">
        <div className="space-y-8">
          <SectionTitle title="Sobre" subtitle="Carolina Maconi" white small />
          <p className="text-white/90">
            Prazer, sou Carol, Arquiteta e Urbanista com mais de 5 anos de
            atuação no desenvolvimento de projetos personalizados, que aliam
            estética, funcionalidade e identidade. Já desenvolvi diversos
            trabalhos na região, e atuo em soluções arquitetônicas residenciais,
            comerciais e Interiores, sempre com foco na experiência do cliente e
            na harmonia dos espaços.
          </p>
          <Link
            href="/sobre"
            className="font-bold underline underline-offset-4 text-white inline-block hover:text-[#E0E4D5] transition"
          >
            Ver Mais
          </Link>
        </div>
      </div>

      <Image
        src="/carol-sobre.jpg"
        alt="Carol Maconi"
        width={1000}
        height={800}
        className="object-cover h-full max-h-[600px]"
      />
    </section>
  );
};
