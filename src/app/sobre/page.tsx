import AnimatedContent from "@/components/animations/animated-content";
import { SectionTitle } from "@/components/shared/section-title";
import { TitlePage } from "@/components/shared/title-page";
// import { CardTools } from "@/components/sobre/card-tools";
import { ExperienceNumbers } from "@/components/sobre/experience-numbers";
// import { PenBox, PenLine, PenTool } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  // const tools = [
  //   {
  //     experience: "9 anos+",
  //     title: "AUTOCAD",
  //     subtitle:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis dolorem omnis ipsam ab neque.",
  //     icon: <PenTool size={60} />,
  //   },
  //   {
  //     experience: "8 anos+",
  //     title: "CORELDRAW",
  //     subtitle:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis dolorem omnis ipsam ab neque.",
  //     icon: <PenLine size={60} />,
  //   },
  //   {
  //     experience: "8 anos+",
  //     title: "V-RAY",
  //     subtitle:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis dolorem omnis ipsam ab neque.",
  //     icon: <PenBox size={60} />,
  //   },
  //   {
  //     experience: "7 anos+",
  //     title: "PROMOB",
  //     subtitle:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis dolorem omnis ipsam ab neque.",
  //     icon: <PenTool size={60} />,
  //   },
  //   {
  //     experience: "6 anos+",
  //     title: "LUMION 3D",
  //     subtitle:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis dolorem omnis ipsam ab neque.",
  //     icon: <PenLine size={60} />,
  //   },
  //   {
  //     experience: "6 anos+",
  //     title: "PHOTOSHOP",
  //     subtitle:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse reiciendis dolorem omnis ipsam ab neque.",
  //     icon: <PenBox size={60} />,
  //   },
  // ];

  return (
    <div>
      <section className="max-w-7xl px-5 m-auto">
        <TitlePage title="Sobre" />

        <div className="flex gap-24 max-lg:gap-16 max-[880px]:flex-col max-[880px]:items-center">
          <AnimatedContent>
            <span className="text-muted-foreground">Sobre</span>
            <h2 className="mt-2">Carol Maconi</h2>
            <p className="mt-8 text-zinc-700">
              Formada em Arquitetura e Urbanismo pela Universidade do Sagrado
              Coração de Bauru (SP) em 2017, Carol Maconi traz uma trajetória
              marcada pela versatilidade e dedicação ao ofício. Antes de
              consolidar sua atuação na arquitetura, Carol acumulou experiências
              em áreas complementares, como projetista e no setor de vendas em
              loja especializada em gesso, além de ter passado por diferentes
              escritórios de arquitetura, o que contribuiu para a construção de
              uma visão ampla e prática do mercado.
            </p>
            <p className="mt-3 text-zinc-700">
              Há mais de cinco anos, Carol atua de forma autoral no
              desenvolvimento de projetos personalizados que aliam estética,
              funcionalidade e identidade. Com sensibilidade e atenção aos
              detalhes, ela já assinou diversos trabalhos na região, sempre
              prezando por soluções que valorizem a experiência do cliente e a
              harmonia dos espaços.
            </p>
            <p className="mt-3 text-zinc-700">
              Seja em projetos residenciais, comerciais ou de interiores, sua
              abordagem combina criatividade, técnica e empatia — resultando em
              ambientes únicos, pensados para refletir o estilo de vida e as
              necessidades de cada cliente.
            </p>
            <p className="mt-3 text-zinc-700">
              Se você está planejando um novo projeto ou deseja transformar um
              ambiente com soluções arquitetônicas personalizadas, será um
              prazer conversar com você!
            </p>
            <p className="mt-3 text-zinc-700">
              ENTRE EM CONTATO: (14) 98122-8433
            </p>
          </AnimatedContent>

          <AnimatedContent>
            <Image
              src={"/carol-sobre2.jpg"}
              alt="Foto Carol"
              width={1000}
              height={1000}
              className="w-[550px] max-w-[550px] max-lg:max-w-[400px] max-[880px]:w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </AnimatedContent>
        </div>
      </section>

      {/* <section className="mt-36 bg-gradient-to-b from-[#060900]/85 to-[#060900]">
        <div className="max-w-7xl px-5 py-16 m-auto">
          <SectionTitle title="Conhecimento" subtitle="Ferramentas" white />

          <ul className="grid grid-cols-3 gap-5 mt-16 max-md:grid-cols-2 max-sm:grid-cols-1">
            {tools.map((tool, idx) => (
              <li key={`tool-${idx}-${tool.title}`}>
                <CardTools {...tool} />
              </li>
            ))}
          </ul>
        </div>
      </section> */}

      <section className="mt-36 max-w-7xl px-5 m-auto mb-36">
        <SectionTitle title="Profissional" subtitle="Experiência" />

        <div className="flex justify-between gap-6 mt-16 max-sm:grid max-sm:grid-cols-2">
          <ExperienceNumbers number="5" title="ANOS DE EXPERIÊNCIA" />
          <ExperienceNumbers number="19" title="PROJETOS CONCLUÍDOS" />
          <ExperienceNumbers number="57" title="CLIENTES SATISFEITOS" />
          <ExperienceNumbers number="22" title="SONHOS REFORMADOS" />
        </div>
      </section>
    </div>
  );
}
