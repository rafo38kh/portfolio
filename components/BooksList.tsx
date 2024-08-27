"use client";

import { Book } from "@/types";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type BooksListProps = {
  books: Book[];
};

export default function BooksList({ books }: BooksListProps) {
  const listRef = useRef<HTMLUListElement>(null);

  const filteredBooks = books?.filter((book) => book?.isRead) || [];

  const doubledBooks = [...filteredBooks];

  const [scrollWidth, setScrollWidth] = useState<number>(0);

  useEffect(() => {
    if (listRef.current) {
      const listWidth = listRef.current.scrollWidth;
      setScrollWidth(listWidth);
    }
  }, [filteredBooks]);

  const scrolGridListVarints: Variants = {
    animate: {
      x: -scrollWidth + 240,
      transition: {
        duration: scrollWidth / 40,
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <motion.ul
      ref={listRef}
      className="no-scrollbar flex h-full w-60 content-start gap-2 overflow-x-scroll md:w-full"
    >
      {doubledBooks?.map(
        (book, idx) =>
          book?.isRead && (
            <motion.li
              key={idx}
              animate="animate"
              variants={scrolGridListVarints}
              className="h-full w-max flex-shrink-0 rounded-lg"
            >
              <Image
                width={100}
                height={100}
                alt={book?.title}
                src={book?.image}
                className="w-max rounded-lg"
              />
            </motion.li>
          ),
      )}
    </motion.ul>
  );
}
