import Image from "next/image";
import { SectionTitle } from "../shared/section-title";
import Link from "next/link";
import AnimatedContent from "../animations/animated-content";

export const About = () => {
  return (
    <section className="mt-36 grid grid-cols-2 max-lg:grid-cols-1 mb-36">
      <div className="bg-primary p-20 max-md:p-10">
        <div className="space-y-8">
          <SectionTitle title="Sobre" subtitle="Carolina Maconi" white small />
          <AnimatedContent containerClass="space-y-8">
            <p className="text-white/90">
              Prazer, sou Carol, Arquiteta e Urbanista com mais de 5 anos de
              experiência, atuando no desenvolvimento de projetos personalizados
              que unem estética, funcionalidade e identidade. Trabalho com
              soluções residenciais, comerciais e de interiores, sempre focando
              na experiência do cliente e na harmonia dos espaços.
            </p>

            <Link
              href="/sobre"
              className="font-bold underline underline-offset-4 text-white inline-block hover:text-[#E0E4D5] transition"
            >
              Conheça mais sobre mim
            </Link>
          </AnimatedContent>
        </div>
      </div>

      <Image
        src="/carol-sobre.jpeg"
        alt="Carol Maconi"
        width={1000}
        height={1000}
        className="object-cover h-full max-h-[600px]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </section>
  );
};
