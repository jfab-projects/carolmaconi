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
          <Image
            src={images[0]}
            alt={name}
            width={1000}
            height={1000}
            className="w-full h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <h2 className="text-2xl text-left mt-4 max-md:text-3xl transition-transform duration-300 group-hover:translate-x-2">
            {name}
          </h2>

          <Separator className="my-2" />

          <div className="flex justify-between gap-2">
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              {type}
            </span>
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              {year}
            </span>
          </div>
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
