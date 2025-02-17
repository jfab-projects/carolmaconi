import Image from "next/image";
import { SectionTitle } from "../shared/section-title";
import Link from "next/link";

export const About = () => {
  return (
    <section className="mt-36 grid grid-cols-2 max-lg:grid-cols-1">
      <div className="bg-primary p-20 max-md:p-10">
        <div className="space-y-8">
          <SectionTitle title="Sobre" subtitle="Carolina Maconi" white small />
          <p className="text-white/90">
            Lorem ipsum dolor sit amet consectetur. Sit urna risus fusce neque
            egestas dictumst aliquet facilisis venenatis. Tempor pulvinar
            imperdiet ultricies non velit viverra dignissim amet. Nisl viverra
            cras consectetur vel. Id sed feugiat nec amet pulvinar venenatis
            convallis nisi morbi. Neque ut malesuada vitae vestibulum
            suspendisse. Dui eget risus facilisi vestibulum dolor vestibulum. At
            ut ultricies morbi vitae tellus mattis nisl nibh gravida. Lorem
            ipsum dolor sit amet.
          </p>
          <Link
            href="/sobre"
            className="font-bold underline underline-offset-4 text-white inline-block hover:text-[#E0E4D5] transition"
          >
            Ver Mais
          </Link>
        </div>
      </div>

      <Image
        src="/carol-sobre.jpg"
        alt="Carol Maconi"
        width={1000}
        height={800}
        className="object-cover h-full max-h-[600px]"
      />
    </section>
  );
};
