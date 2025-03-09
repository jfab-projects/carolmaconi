import AnimatedContent from "../animations/animated-content";
import SplitText from "../animations/split-text";

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
    <div>
      <AnimatedContent
        config={{ tension: 75, friction: 30 }}
        direction="horizontal"
        reverse
      >
        <h2
          className={`font-normal text-base text-primary uppercase before:[''] before:w-12 before:h-1 before:bg-primary before:inline-block before:mr-2 before:mb-1 ${
            white && "text-white/50 before:bg-white/50"
          }`}
        >
          {title}
        </h2>
      </AnimatedContent>

      <h3
        className={`font-bold text-5xl max-lg:text-4xl mt-1 ${
          white && "text-white"
        } ${small && "text-4xl"}`}
      >
        <SplitText text={subtitle} />
      </h3>
    </div>
  );
};
