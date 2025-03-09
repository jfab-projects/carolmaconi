"use client";

import CountUp from "../animations/count-up";

export const ExperienceNumbers = ({
  number,
  title,
}: {
  number: string;
  title: string;
}) => {
  return (
    <div className="text-center">
      <h3 className="font-bold text-7xl">
        <CountUp to={+number} duration={1} className="count-up-text" />+
      </h3>
      <span className="text-primary-light">{title}</span>
    </div>
  );
};
