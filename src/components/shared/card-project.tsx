import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import CarouselProject from "./carousel-project";
import AnimatedContent from "../animations/animated-content";

type CardProjectProps = {
  name: string;
  images: string[];
  type: string;
  year: string;
};

export const CardProject = ({ name, images, type, year }: CardProjectProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group cursor-pointer overflow-hidden">
          <AnimatedContent config={{ tension: 75, friction: 25 }}>
            <Image
              src={images[0]}
              alt={name}
              width={650}
              height={650}
              className="h-[550px] w-[550px] object-cover transition-transform duration-300 group-hover:scale-105 max-lg:h-[400px] max-md:w-full"
            />

            <h2 className="text-left mt-6 max-md:text-3xl transition-transform duration-300 group-hover:translate-x-2">
              {name}
            </h2>

            <Separator className="my-4" />

            <div className="flex justify-between gap-2">
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                {type}
              </span>
              <span className="transition-transform duration-300 group-hover:-translate-x-2">
                {year}
              </span>
            </div>
          </AnimatedContent>
        </div>
      </DialogTrigger>
      <DialogContent className="min-w-[80%] max-md:max-w-[90%]">
        <DialogTitle className="sr-only">projeto</DialogTitle>
        <DialogDescription className="sr-only"></DialogDescription>

        <CarouselProject images={images} />
      </DialogContent>
    </Dialog>
  );
};
