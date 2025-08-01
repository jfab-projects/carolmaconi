import { Copyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#060900]/85 to-[#060900]">
      <div className="max-w-7xl m-auto pt-16 pb-8 px-5 grid grid-cols-3 gap-5 text-accent max-lg:grid-cols-2 max-sm:grid-cols-1">
        <Link
          href="/"
          className="max-lg:col-span-full max-lg:m-auto max-lg:pb-8 self-center"
        >
          <Image
            src="/logo-cm-branca.svg"
            alt="Logo CM Arq"
            width={128}
            height={128}
            priority
            className="size-24 hover:brightness-110 transition max-md:size-20"
          />
        </Link>

        <div className="max-w-[320px] max-lg:m-auto max-sm:text-center">
          <h4 className="text-2xl font-bold">CONTATO</h4>
          <ul className="mt-6 space-y-4">
            <li>+55 14 98122-8433</li>
            <li>carolmaconi.arq@gmail.com</li>

            <li className="border-b border-white/20 pb-4">
              Lençóis Paulista - SP
            </li>
            <li className="flex items-center gap-8 max-sm:justify-center">
              <Link
                href="https://www.instagram.com/carolmaconi.arq/"
                target="_blank"
              >
                <Image
                  src="/social/instagram.svg"
                  alt="Instagram"
                  width={25}
                  height={25}
                />
              </Link>
              <Link
                href="https://www.facebook.com/carolmaconi.arq"
                target="_blank"
              >
                <Image
                  src="/social/facebook.svg"
                  alt="Facebook"
                  width={25}
                  height={25}
                />
              </Link>
              <Link href="https://wa.me/5514981228433" target="_blank">
                <Image
                  src="/social/whatsapp.svg"
                  alt="Whatsapp"
                  width={25}
                  height={25}
                />
              </Link>
            </li>
          </ul>
        </div>

        <div className="max-lg:mx-auto max-sm:text-center max-sm:mt-5">
          <h4 className="text-2xl font-bold">INFORMAÇÕES</h4>
          <nav>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/projetos"
                  className="hover:text-primary transition"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-primary transition">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-primary transition">
                  Contato
                </Link>
              </li>
              {/* <li>
                <Link href="/links" className="hover:text-primary transition">
                  Links
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/20 p-5">
        <p className="max-w-7xl m-auto text-accent flex items-center gap-2 max-sm:justify-center">
          Todos os direitos reservados <Copyright size={16} /> 2025
        </p>
      </div>
    </footer>
  );
};
