import AnimatedContent from "../animations/animated-content";

export const SectionTitle = ({
  title,
  subtitle,
  white = false,
  small = false,
}: {
  title: string;
  subtitle: string;
  white?: boolean;
  small?: boolean;
}) => {
  return (
    <AnimatedContent direction="horizontal" reverse duration={1.5}>
      <h2
        className={`font-normal text-base text-primary uppercase before:[''] before:w-12 before:h-1 before:bg-primary before:inline-block before:mr-2 before:mb-1 ${
          white && "text-white/50 before:bg-white/50"
        }`}
      >
        {title}
      </h2>

      <h3
        className={`font-bold text-5xl max-lg:text-4xl mt-1 ${
          white && "text-white"
        } ${small && "text-4xl"}`}
      >
        {subtitle}
      </h3>
    </AnimatedContent>
  );
};
