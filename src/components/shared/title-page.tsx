import AnimatedContent from "../animations/animated-content";

export const TitlePage = ({ title }: { title: string }) => {
  return (
    <div className="w-full py-7 title-page-gradient mt-1 mb-36">
      <AnimatedContent direction="horizontal" reverse duration={1.5}>
        <h1 className="text-5xl max-sm:text-4xl">{title}</h1>
      </AnimatedContent>
    </div>
  );
};
