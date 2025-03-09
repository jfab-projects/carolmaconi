import { MoveUpRight } from "lucide-react";

import { ImagesSlider } from "../ui/images-slider";
import { ButtonLink } from "./button-link";
import AnimatedContent from "../animations/animated-content";

export const CtaFooter = () => {
  const imgs = [
    "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg",
    "/projects/skimell.jpg",
    "https://images.pexels.com/photos/5644367/pexels-photo-5644367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  return (
    <section className="mt-36 h-[600px]">
      <ImagesSlider images={imgs}>
        <div className="z-50 flex flex-col gap-8 items-center p-8 max-w-[700px] m-auto text-center max-md:p-5">
          <AnimatedContent config={{ tension: 75, friction: 25 }}>
            <h3 className="font-bold text-3xl max-md:text-2xl text-accent">
              Transformando Sonhos em Espaços! Conheça Nossas Soluções
              Arquitetônicas
            </h3>
          </AnimatedContent>
          <AnimatedContent delay={100} config={{ tension: 75, friction: 25 }}>
            <ButtonLink
              href="/contato"
              icon={<MoveUpRight size={18} />}
              variant="ghost-white"
            >
              Contato
            </ButtonLink>
          </AnimatedContent>
        </div>
      </ImagesSlider>
    </section>
  );
};
