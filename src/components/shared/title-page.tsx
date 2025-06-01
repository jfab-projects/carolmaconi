export const TitlePage = ({ title }: { title: string }) => {
  return (
    <div className="w-full py-6 title-page-gradient mt-16 mb-36">
      <h1 className="text-5xl max-sm:text-3xl">{title}</h1>
    </div>
  );
};
