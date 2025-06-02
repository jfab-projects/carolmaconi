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
    <div>
      <Carousel
        setApi={setApi}
        className="w-full m-auto max-w-[95%]"
        opts={{ loop: true }}
      >
        <CarouselContent className="max-h-[85vh]">
          {images &&
            images.map((img, index) => (
              <CarouselItem
                key={`caroselItem-${index}`}
                className="basis-3/5 max-md:basis-full"
              >
                <div
                  className={cn("transition-all duration-500", {
                    "opacity-30": index !== current - 1,
                  })}
                >
                  <Image
                    src={img}
                    alt={"Foto do Projeto"}
                    width={1600}
                    height={1600}
                    loading="lazy"
                    className="w-full h-[600px] object-cover max-xl:h-[500px] max-md:h-[350px]"
                  />
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
