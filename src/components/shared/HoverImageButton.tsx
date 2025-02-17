"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  {
    name: "Pizzaria Hábil",
    type: "Projeto Arquitetônico",
    image: "/projects/habil.jpg",
  },
  {
    name: "Sorveteria Skimell",
    type: "Projeto de Interiores",
    image: "/projects/skimell.jpg",
  },
  {
    name: "Loja Closet Femme",
    type: "Projeto de Interiores",
    image: "/projects/closet-femme.jpg",
  },
  {
    name: "Casa E.L.",
    type: "Projeto de Interiores",
    image: "/projects/casael.jpg",
  },
];

export default function HoverImageButton() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [adjustedTop, setAdjustedTop] = useState(0);

  useEffect(() => {
    const handlePosition = () => {
      const viewportHeight = window.innerHeight;
      const imageHeight = 180; // Altura da imagem
      const scrollY = window.scrollY; // Posição do scroll
      const cursorY = position.y; // Posição do cursor

      let newTop = cursorY - 100; // Posição padrão

      // Se a imagem estiver saindo da tela, ajustamos para cima
      if (newTop + imageHeight > viewportHeight + scrollY - 20) {
        newTop = viewportHeight + scrollY - imageHeight - 20;
      }

      setAdjustedTop(newTop);
    };

    handlePosition();
  }, [position.y]);

  return (
    <div className="relative">
      <ul className="mt-12">
        {projects.map((project, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b px-8 py-8 cursor-pointer"
            onMouseEnter={(e) => {
              setHoveredItem(project.image);
              setPosition({ x: e.clientX, y: e.clientY });
            }}
            onMouseMove={(e) => {
              setPosition({ x: e.clientX, y: e.clientY });
            }}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <h2>{project.name}</h2>
            <span className="text-lg text-neutral-600">{project.type}</span>
          </li>
        ))}
      </ul>
      {hoveredItem && (
        <div
          className="absolute pointer-events-none transition-transform duration-200"
          style={{
            left: position.x + 20,
            top: adjustedTop,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image
            src={hoveredItem}
            alt="Preview"
            width={300}
            height={300}
            className="rounded-lg shadow-lg w-[240px] h-[180px]"
          />
        </div>
      )}
    </div>
  );
}
