import { SectionTitle } from "../shared/section-title";
import Image from "next/image";

export const ServicesProvided = () => {
  return (
    <section className="mt-36">
      <SectionTitle title="Principais Serviços" subtitle="Serviços Prestados" />

      <ul className="mt-16 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        <li className="bg-none bg-transparent">
          <Image
            src="/services-provided/servico-1.jpg"
            alt="Projetos Arquitetônicos"
            width={600}
            height={600}
            className="w-full h-[300px] object-cover"
          />

          <div className="bg-white shadow-lg p-4 max-w-[84%] m-auto text-center relative -top-12">
            <h3 className="font-bold text-xl">Projetos Arquitetônicos</h3>
            <p className="opacity-60 mt-3">
              Seja uma reforma ou partindo do terreno à planta final, cuidamos
              de tudo para que sua obra saia como planejado. Desenvolvemos
              projetos, residenciais e comerciais, com foco em funcionalidade,
              estética e execução fiel ao projeto.
            </p>
          </div>
        </li>

        <li className="bg-none bg-transparent">
          <Image
            src="/services-provided/servico-2.jpg"
            alt="Projetos Arquitetônicos"
            width={600}
            height={600}
            className="w-full h-[300px] object-cover "
          />

          <div className="bg-white shadow-lg p-4 max-w-[84%] m-auto text-center relative -top-12">
            <h3 className="font-bold text-xl">Projetos de Interiores</h3>
            <p className="opacity-60 mt-3">
              Projetamos cada ambiente com foco no desejo do cliente, desde o
              estudo de layout, até a escolha dos acabamentos e iluminação, para
              transformar seus espaços em locais acolhedores e funcionais.
              Resultado: Ambientes bonitos, práticos e com a sua cara.
            </p>
          </div>
        </li>

        <li className="bg-none bg-transparent">
          <Image
            src="/services-provided/servico-3.jpg"
            alt="Projetos Arquitetônicos"
            width={600}
            height={600}
            className="w-full h-[300px] object-cover "
          />

          <div className="bg-white shadow-lg p-4 max-w-[84%] m-auto text-center relative -top-12">
            <h3 className="font-bold text-xl">Consultorias</h3>
            <p className="opacity-60 mt-3">
              Orientações pontuais para tirar dúvidas e tomar decisões com mais
              segurança. Ideal para quem precisa de um olhar profissional antes
              de reformar, decorar ou começar uma obra.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
