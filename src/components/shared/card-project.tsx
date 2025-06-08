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
  finished: boolean;
};

export const CardProject = ({
  name,
  images,
  type,
  year,
  finished,
}: CardProjectProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group cursor-pointer overflow-hidden relative">
          <span className="text-sm text-white font-medium absolute top-2 left-2 bg-black/50 px-2 py-1 z-10">
            {finished ? "Finalizado" : "Em andamento"}
          </span>
          <Image
            src={images[0]}
            alt={name}
            width={900}
            height={900}
            className="w-full h-[350px] object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
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
      <DialogContent className="max-w-[1200px] max-h-[90%] p-0 bg-transparent border-0 shadow-none max-xl:max-w-[80%] max-md:px-2">
        <DialogTitle className="sr-only">projeto</DialogTitle>
        <DialogDescription className="sr-only"></DialogDescription>

        <CarouselProject images={images} />
      </DialogContent>
    </Dialog>
  );
};
