import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { FloatingWhatsapp } from "@/components/shared/floating-whatsapp";

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carol Maconi Arquitetura",
  description: "Projetos e Serviços de Arquitetura | CM ARQ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.className} antialiased `}>
        <Header />

        <div>{children}</div>

        {/* <CtaFooter /> */}
        <Footer />

        <NextTopLoader
          color="#849167"
          height={3}
          shadow="0 0 10px #849167,0 0 5px #849167"
        />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
