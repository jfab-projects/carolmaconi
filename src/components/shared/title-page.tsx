export const TitlePage = ({ title }: { title: string }) => {
  return (
    <div className="w-full py-8 title-page-gradient mt-16 mb-36">
      <h1 className="text-8xl max-sm:text-7xl">{title}</h1>
    </div>
  );
};
