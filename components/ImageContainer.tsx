"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Book } from "@/types";

type ImageContainerProps = { book: Book };

export default function ImageContainer({ book }: ImageContainerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const { left, top } = containerRef.current.getBoundingClientRect();
      const cursorX = e.clientX - left; // X position relative to the container
      const cursorY = e.clientY - top; // Y position relative to the container

      setPosition({ x: cursorX, y: cursorY });
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const touch = e.touches[0];
      const { left, top } = containerRef.current.getBoundingClientRect();
      const cursorX = touch.clientX - left;
      const cursorY = touch.clientY - top;

      setPosition({ x: cursorX, y: cursorY });
      setIsHovered(true);
    }
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative flex h-full w-full gap-2 hover:cursor-none">
      <div
        ref={containerRef}
        className="relative h-full w-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          width={500}
          height={500}
          alt={book?.title}
          src={book?.image}
          className="rounded-lg"
          layout="responsive"
          objectFit="cover"
        />
      </div>

      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: `${position.y + 10}px`,
            left: `${position.x + 110}px`,
            transform: "translate(-50%, 0)",
          }}
          className="absolute z-50 flex h-max w-max flex-col gap-1 rounded-md bg-black/80 p-4"
        >
          <span className="text-sm font-bold text-white/90">{book?.title}</span>
          <span className="text-sm font-bold text-white/70">
            {book?.author}
          </span>
        </div>
      )}
    </div>
  );
}
