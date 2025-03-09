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
          <div>
            <span className="text-muted-foreground">Olá, eu sou</span>
            <h2 className="mt-2">Carolina Maconi Benedito</h2>
            <p className="mt-8 text-zinc-700 text-lg">
              Lorem ipsum dolor sit amet consectetur. Volutpat massa turpis
              imperdiet ut pharetra phasellus pellentesque. Egestas pellentesque
              mauris vel sapien odio at ac auctor. Ac urna mauris felis magna
              aenean faucibus sed. Commodo varius fermentum sit scelerisque
              purus ac tortor. Tortor ac mauris morbi ut.
            </p>
            <p className="mt-3 text-zinc-700 text-lg">
              Lorem ipsum dolor sit amet consectetur. Volutpat massa turpis
              imperdiet ut pharetra phasellus pellentesque. Egestas pellentesque
              mauris vel sapien odio at ac auctor.
            </p>
          </div>

          <Image
            src={"/carol-sobre2.jpg"}
            alt="Foto Carol"
            width={1000}
            height={1000}
            className="w-[550px] max-w-[550px] max-lg:max-w-[400px] max-[880px]:w-full object-cover"
          />
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

      <section className="mt-36 max-w-7xl px-5 m-auto">
        <SectionTitle title="Profissional" subtitle="Experiência" />

        <div className="flex justify-between gap-6 mt-16 max-sm:grid max-sm:grid-cols-2">
          <ExperienceNumbers number="10" title="ANOS DE EXPERIÊNCIA" />
          <ExperienceNumbers number="19" title="PROJETOS CONCLUÍDOS" />
          <ExperienceNumbers number="33" title="CLIENTES SATISFEITOS" />
          <ExperienceNumbers number="47" title="SONHOS REFORMADOS" />
        </div>
      </section>
    </div>
  );
}
