export const ExperienceNumbers = ({
  number,
  title,
}: {
  number: string;
  title: string;
}) => {
  return (
    <div className="text-center">
      <h3 className="font-bold text-7xl">{number}</h3>
      <span className="text-primary-light">{title}</span>
    </div>
  );
};
