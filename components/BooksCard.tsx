import Image from "next/image";
import { getBooks } from "@/sanity/schemaTypes/sanity-utils";

export default async function BooksCard() {
  const books = await getBooks();

  return (
    <div className="flex w-full flex-col items-start justify-between gap-4 rounded-3xl bg-cardBackground p-4">
      <span className="text-xl font-bold">Books</span>
      <ul className="flex h-full w-full flex-row gap-4">
        <Image
          className="h-32 w-20 rounded-lg"
          src={books[0]?.image}
          width={40}
          height={40}
          alt="Picture of the author"
        />
        <div className="flex w-full flex-row flex-wrap content-start gap-2">
          {books?.map((book) => (
            <li key={book?._id} className="h-14 w-10 rounded-lg">
              <Image
                className="h-full w-full rounded-lg"
                src={book?.image}
                width={40}
                height={40}
                alt="Picture of the author"
              />
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
