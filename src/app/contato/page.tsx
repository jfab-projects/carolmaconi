import { InputCustom } from "@/components/shared/input-custom";
import { SectionTitle } from "@/components/shared/section-title";
import SpotlightCard from "@/components/shared/spotlight-card";
import { TextAreaCustom } from "@/components/shared/textarea-custom";
import { TitlePage } from "@/components/shared/title-page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  const items = [
    {
      title: "Qual a resposta da dúvida 1?",
      content: "Resposta da dúvida 1.",
    },
    {
      title: "É possível fazer um orçamento sem pagar?",
      content: "Sim. As primeiras reuniões com o cliente podem ser gratuitas.",
    },
    {
      title: "Quais os próximos passos?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum.",
    },
    {
      title: "É possível fazer um orçamento sem pagar?",
      content: "Sim. As primeiras reuniões com o cliente podem ser gratuitas.",
    },
    {
      title: "Quais os próximos passos?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum.",
    },
  ];

  return (
    <div className="max-w-7xl px-5 m-auto">
      <TitlePage title="Contato" />

      <section className="flex gap-5 max-lg:flex-col">
        <div className="grid grid-cols-2 gap-5 min-w-[440px] max-sm:min-w-full">
          <SpotlightCard>
            <Link
              href="#"
              className="flex flex-col justify-between gap-6 h-full"
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
              href="#"
              className="flex flex-col justify-between gap-6 h-full"
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
              href="#"
              className="flex flex-col justify-between gap-6 h-full"
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
              href="#"
              className="flex flex-col justify-between gap-6 h-full"
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
          <InputCustom
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
          </Button>
        </SpotlightCard>
      </section>

      <section className="mt-36">
        <SectionTitle title="FAQ" subtitle="Perguntas Frequentes" />

        <Accordion type="single" collapsible className="mt-16 w-full">
          {items.map(({ title, content }, index) => (
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
