import { getBooks } from "@/sanity/schemaTypes/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const books = await getBooks();

  console.log(books, "books");

  return (
    <div>
      <h1>My Books</h1>
      <ul>
        {books.map((book) => (
          <li
            className="flex w-96 flex-row items-center justify-center"
            key={book?._id}
          >
            <Image
              src={book?.image}
              width={100}
              height={100}
              alt="Picture of the author"
            />
            <div>
              <span className="text-xl font-bold">{book?.title}</span>
              <p>{book?.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
