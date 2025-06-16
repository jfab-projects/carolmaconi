import { Manrope } from "next/font/google";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { FloatingWhatsapp } from "@/components/shared/floating-whatsapp";
import { Metadata } from "next";

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Arquiteta Carol Maconi | Projetos residenciais e comerciais em Lençóis Paulista",
    template: "%s | Arquiteta Carol Maconi",
  },
  description:
    "Arquiteta com experiência em projetos residenciais e comerciais em Lençóis Paulista e região.",
  keywords: [
    "Arquiteta Carol Maconi",
    "Projetos de arquitetura",
    "Arquiteta em Lençóis Paulista",
    "Arquitetura residencial Lençóis Paulista",
    "Design de interiores Lençóis Paulista",
    "Projeto comercial personalizado",
    "Arquitetura com estilo e personalidade",
    "Projetos de interiores",
    "Projeto comercial Lençóis Paulista",
    "Carol Maconi",
  ],
  applicationName: "Arquiteta Carol Maconi",
  metadataBase: new URL("https://carolmaconi.com.br/"),
  alternates: {
    canonical: "https://carolmaconi.com.br/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <meta
        name="google-site-verification"
        content="kEtVcZMrFvhB4yrOLqr9HSoDRdD7KkkkdPOq7uiCC74"
      />

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
