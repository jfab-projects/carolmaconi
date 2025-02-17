"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ButtonLink } from "./button-link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Header = () => {
  const currentUrl = usePathname();

  return (
    <header className="py-3 border-b">
      <div className="max-w-7xl px-5 m-auto flex items-center justify-between gap-4 max-sm:flex-col">
        <Link href="/">
          <Image
            src="/logo-cmarq.svg"
            alt="Logo CM Arq"
            width={250}
            height={60}
            priority
            className="w-[211px] h-[56px]"
          />
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className={cn(
              "opacity-85 hover:text-primary hover:opacity-100 transition",
              currentUrl === "/" && "font-bold opacity-100"
            )}
          >
            Home
          </Link>
          <Link
            href="/projetos"
            className={cn(
              "opacity-85 hover:text-primary hover:opacity-100 transition",
              currentUrl === "/projetos" && "font-bold opacity-100"
            )}
          >
            Projetos
          </Link>
          <Link
            href="/sobre"
            className={cn(
              "opacity-85 hover:text-primary hover:opacity-100 transition",
              currentUrl === "/sobre" && "font-bold opacity-100"
            )}
          >
            Sobre
          </Link>
          <ButtonLink href="/contato" className="max-sm:px-3">
            Contato
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
};
