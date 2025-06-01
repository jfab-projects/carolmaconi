import Image from "next/image";
import Link from "next/link";

export const FloatingWhatsapp = () => {
  return (
    <Link
      href="https://wa.me/5514981228433"
      target="_blank"
      className="fixed bottom-5 right-5 bg-[#49EA66] p-2.5 rounded-full hover:brightness-90 transition max-md:bottom-3 max-md:right-3"
    >
      <Image
        src="/social/whatsapp-floating.svg"
        alt="Whatsapp"
        width={25}
        height={25}
        className="size-[18px]"
      />
    </Link>
  );
};
