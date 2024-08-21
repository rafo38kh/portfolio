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

  console.log(scrollWidth, "scrollWidth");

  useEffect(() => {
    if (listRef.current) {
      const listWidth = listRef.current.scrollWidth;
      setScrollWidth(listWidth);
    }
  }, [filteredBooks]);

  const scrolGridListVarints: Variants = {
    animate: {
      x: -scrollWidth,
      transition: {
        duration: scrollWidth / 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <motion.ul
      ref={listRef}
      className="no-scrollbar flex h-max w-max content-start gap-2 overflow-x-scroll"
    >
      {doubledBooks?.map(
        (book) =>
          book?.isRead && (
            <motion.li
              key={book?._id}
              animate="animate"
              variants={scrolGridListVarints}
              className="h-40 w-24 flex-shrink-0 rounded-lg"
            >
              <Image
                className="h-full w-full rounded-lg"
                src={book?.image}
                width={100}
                height={100}
                alt={book?.title}
              />
            </motion.li>
          ),
      )}
    </motion.ul>
  );
}
