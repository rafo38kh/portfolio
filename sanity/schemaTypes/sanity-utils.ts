import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-08-08",
  useCdn: true,
});

export async function getBooks() {
  try {
    const query = `*[_type == "book"]{
      _id,
      title,
      'slug': slug.current,
      'image': photo.asset->url,
      description,
    }`;

    const books = await client.fetch(query);
    return books;
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return [];
  }
}
