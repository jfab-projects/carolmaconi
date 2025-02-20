import { JSX } from "react";

type CardToolsProps = {
  experience: string;
  title: string;
  subtitle: string;
  icon: JSX.Element;
};

export const CardTools = ({
  experience,
  title,
  subtitle,
  icon,
}: CardToolsProps) => {
  return (
    <div className="flex flex-col gap-6 relative p-6 bg-[#242b15] border border-primary text-white">
      <span className="absolute top-2 right-2 text-white/70">{experience}</span>
      {icon}
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="text-white/70">{subtitle}</p>
    </div>
  );
};
