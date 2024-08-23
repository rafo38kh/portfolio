import Image from "next/image";
import { getBooks } from "@/sanity/schemaTypes/sanity-utils";
import BooksList from "./BooksList";
import ImageContainer from "./ImageContainer";

import { Book } from "@/types";

export default async function BooksCard() {
  const books = await getBooks();

  const currentlyReading = books.find((book) => !book?.isRead) as Book;

  return (
    <div className="border-cardBorder flex flex-col justify-between gap-2 rounded-3xl border bg-cardBackground p-4">
      <span className="text-xl font-bold md:text-2xl">Books</span>

      <span className="w-max text-xs font-bold text-white/80 md:text-sm">
        Currently Reading
      </span>
      <div className="flex h-full w-full items-center gap-4 overflow-hidden">
        <div className="border-cardBorder bg-bookBg flex h-max w-full max-w-40 flex-col gap-2 rounded-lg border p-4">
          <ImageContainer book={currentlyReading} />
        </div>

        <BooksList books={books} />
      </div>
    </div>
  );
}
