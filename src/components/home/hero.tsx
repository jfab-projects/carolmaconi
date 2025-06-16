import React from "react";
import { MoveUpRight } from "lucide-react";
import { ButtonLink } from "../shared/button-link";
import { ImagesSlider } from "../ui/images-slider";
import Link from "next/link";
import AnimatedContent from "../animations/animated-content";

export const Hero = () => {
  const imgs = [
    "/hero/hero-1.png",
    "/hero/hero-2.png",
    "/hero/hero-3.png",
    "/hero/hero-4.png",
  ];

  return (
    <main className="h-[100vh]">
      <ImagesSlider
        images={imgs}
        direction="down"
        overlayClassName="bg-black/65"
      >
        <div className="text-muted z-50 flex flex-col items-center p-8 max-w-[700px] m-auto text-center max-md:p-5">
          <AnimatedContent delay={0.3}>
            <h1 className="font-bold mb-5">
              Seu Espaço com Estilo e{" "}
              <span className="inline-block underline-curva text-[#93A66B]">
                Personalidade
              </span>
            </h1>
          </AnimatedContent>

          <AnimatedContent delay={0.5}>
            <p className="mb-10 text-primary-foreground/90">
              Nossa missão é projetar espaços funcionais, unindo criatividade,
              técnica e sensibilidade para criar ambientes que refletem quem
              você é, sempre pensado com carinho do começo ao fim. Cada projeto
              é único por que cada pessoa é única.
            </p>
          </AnimatedContent>

          <AnimatedContent delay={0.7}>
            <div className="flex items-center gap-4 max-[1060px]:justify-center">
              <ButtonLink href={"/contato"} icon={<MoveUpRight size={18} />}>
                Contato
              </ButtonLink>
              <Link
                href="/projetos"
                className="font-bold underline underline-offset-4 hover:text-primary-light transition"
              >
                Ver Projetos
              </Link>
            </div>
          </AnimatedContent>
        </div>
      </ImagesSlider>
    </main>
  );
};
