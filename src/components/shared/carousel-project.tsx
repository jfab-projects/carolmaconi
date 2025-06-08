"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CarouselProject({ images }: { images: string[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto">
      <Carousel setApi={setApi} className="m-auto max-w-[95%]">
        <CarouselContent>
          {images &&
            images.map((img, index) => (
              <CarouselItem
                key={`caroselItem-${index}`}
                // className="flex justify-center items-center"
              >
                <Image
                  src={img}
                  alt="Foto do Projeto"
                  width={2000}
                  height={2000}
                  loading="lazy"
                  className="object-contain max-h-[700px] max-2xl:max-h-[600px] max-xl:max-h-[500px] max-md:min-h-[220px] max-md:max-h-[320px] max-md:object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-4 flex items-center justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn("h-3.5 w-3.5 rounded-full border-2", {
              "border-primary": current === index + 1,
            })}
          />
        ))}
      </div>
    </div>
  );
}
