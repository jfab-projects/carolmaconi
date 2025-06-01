import { SectionTitle } from "@/components/shared/section-title";
import SpotlightCard from "@/components/shared/spotlight-card";
import { TitlePage } from "@/components/shared/title-page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const faq = [
    {
      title: "Quanto custa um projeto arquitetônico completo??",
      content:
        "O valor pode variar bastante dependendo do tipo e tamanho do projeto, das necessidades do cliente e do nível de detalhamento. Por isso, o ideal é marcar uma conversa para entender o que você precisa e, a partir disso, apresentar um orçamento justo e personalizado.",
    },
    {
      title: "A arquiteta acompanha a obra também?",
      content:
        "Sim! O acompanhamento de obra faz parte dos serviços oferecidos. Isso garante que tudo seja executado conforme o projeto, com mais qualidade, segurança e menos dor de cabeça pra você.",
    },
    {
      title:
        "Não tenho ideia de como quero meu projeto. Você me ajuda com isso?",
      content:
        "Claro! Esse é o nosso papel. A gente escuta suas ideias, sua rotina e gostos, e transforma tudo isso em um projeto que tem a sua cara — bonito, funcional e dentro das suas possibilidades.",
    },
    {
      title: "Vocês também fazem projetos comerciais ou só residenciais?",
      content:
        "Fazemos os dois! Atendemos tanto projetos residenciais quanto comerciais, como lojas, consultórios, escritórios e outros espaços que precisam unir estética com praticidade.",
    },
    {
      title: "O que está incluso no projeto arquitetônico?",
      content:
        "O  projeto inclui o estudo do espaço, planta baixa, layout, cortes, fachadas, detalhamentos, imagens em 3D (renders realistas) e, se necessário, também a compatibilização com outros profissionais. Tudo pensado para facilitar a execução da obra e evitar imprevistos.",
    },
  ];

  return (
    <div className="max-w-7xl px-5 m-auto">
      <TitlePage title="Contato" />

      <section className="flex gap-5 max-lg:flex-col">
        <div className="grid grid-cols-2 gap-5 min-w-[440px] max-sm:min-w-full">
          <SpotlightCard>
            <Link
              href="https://www.instagram.com/carolmaconi.arq/"
              className="flex flex-col justify-between gap-6 h-full"
              target="_blank"
            >
              <Image
                src="/social/instagram.svg"
                alt="Instagram"
                width={100}
                height={100}
                className="w-16 h-16 max-md:w-12 max-md:h-12"
              />
              <h3 className="text-lg font-bold">Instagram</h3>
            </Link>
          </SpotlightCard>
          <SpotlightCard>
            <Link
              className="flex flex-col justify-between gap-6 h-full"
              href="https://wa.me/5514981228433"
              target="_blank"
            >
              <Image
                src="/social/whatsapp.svg"
                alt="Whatsapp"
                width={100}
                height={100}
                className="w-16 h-16 max-md:w-12 max-md:h-12"
              />
              <h3 className="text-lg font-bold">Whatsapp</h3>
            </Link>
          </SpotlightCard>
          <SpotlightCard>
            <Link
              className="flex flex-col justify-between gap-6 h-full"
              href="https://www.facebook.com/carolmaconi.arq"
              target="_blank"
            >
              <Image
                src="/social/facebook.svg"
                alt="Facebook"
                width={100}
                height={100}
                className="w-16 h-16 max-md:w-12 max-md:h-12"
              />
              <h3 className="text-lg font-bold">Facebook</h3>
            </Link>
          </SpotlightCard>
          <SpotlightCard>
            <Link
              className="flex flex-col justify-between gap-6 h-full"
              href="mailto:carolmaconi.arq@gmail.com"
            >
              <Image
                src="/social/email.svg"
                alt="E-mail"
                width={100}
                height={100}
                className="w-16 h-16 max-md:w-12 max-md:h-12"
              />
              <h3 className="text-lg font-bold">E-mail</h3>
            </Link>
          </SpotlightCard>
        </div>

        <SpotlightCard
          className="w-full grid grid-cols-2 gap-4 max-sm:grid-cols-1"
          spotlightColor="rgba(132, 145, 103, 0.4)"
        >
          <span className="text-primary-light col-span-full">
            Em breve formulário de contato, mas não exite em mandar um Whatsapp
            ou Direct no Insta!
          </span>
          {/* <InputCustom
            label="Nome*"
            id="name"
            name="name"
            placeholder="Seu nome"
          />
          <InputCustom
            label="E-mail*"
            id="email"
            name="email"
            placeholder="Seu e-mail"
          />
          <InputCustom
            label="Celular"
            id="phone"
            name="phone"
            placeholder="Com DDD"
          />
          <InputCustom
            label="Assunto*"
            id="subject"
            name="subject"
            placeholder="Assunto"
          />
          <TextAreaCustom
            label="Mensagem"
            id="message"
            name="message"
            placeholder="Do que se trata seu projeto?"
            containerClassName="col-span-2 max-sm:col-span-1"
          />

          <Button className="col-span-2 max-sm:col-span-1 rounded-none">
            Enviar Mensagem
          </Button> */}
        </SpotlightCard>
      </section>

      <section className="my-36">
        <SectionTitle title="FAQ" subtitle="Perguntas Frequentes" />

        <Accordion type="single" collapsible className="mt-16 w-full">
          {faq.map(({ title, content }, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-lg text-left">
                {title}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
