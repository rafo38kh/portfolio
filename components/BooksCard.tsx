import Image from "next/image";
import { getBooks } from "@/sanity/schemaTypes/sanity-utils";
import ImageContainer from "./ImageContainer";
import { Book } from "@/types";

export default async function BooksCard() {
  const books = await getBooks();

  const currentlyReading = books.find((book) => !book?.isRead) as Book;

  console.log(currentlyReading, "currentLyReading");

  return (
    <div className="border-cardBorder flex w-full flex-col items-start justify-between gap-2 rounded-3xl border bg-cardBackground p-4">
      <span className="text-xl font-bold">Books</span>

      <span className="w-max text-xs font-bold text-white/80">
        Currently Reading
      </span>
      <div className="flex h-full w-full items-center gap-4 overflow-hidden">
        <div className="border-cardBorder flex h-full w-full flex-col gap-2 rounded-lg border bg-white/30 p-4">
          <ImageContainer book={currentlyReading} />
        </div>

        <ul className="no-scrollbar flex h-max w-max content-start gap-2 overflow-x-scroll">
          {books?.map(
            (book) =>
              book?.isRead && (
                <li
                  key={book?._id}
                  className="h-40 w-24 flex-shrink-0 rounded-lg"
                >
                  <Image
                    className="h-full w-full rounded-lg"
                    src={book?.image}
                    width={100}
                    height={100}
                    alt={book?.title}
                  />
                </li>
              ),
          )}
        </ul>
      </div>
    </div>
  );
}
