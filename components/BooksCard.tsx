import { getBooks } from "@/sanity/schemaTypes/sanity-utils";
import BooksList from "./BooksList";
import ImageContainer from "./ImageContainer";

import { Book } from "@/types";

export default async function BooksCard() {
  const books = await getBooks();

  const currentlyReading = books.find((book) => !book?.isRead) as Book;

  return (
    <div className="flex h-full flex-col gap-2 rounded-3xl border border-cardBorder bg-cardBackground p-4">
      <span className="text-xl font-bold md:text-2xl">Books</span>

      <span className="w-max text-xs font-bold text-white/80 md:text-sm">
        Currently Reading
      </span>
      <div className="flex h-max w-full items-center gap-4 overflow-hidden">
        <div className="flex h-full w-full max-w-40 flex-col gap-2 rounded-lg border border-cardBorder bg-bookBg p-4">
          <ImageContainer book={currentlyReading} />
        </div>

        <BooksList books={books} />
      </div>
    </div>
  );
}
