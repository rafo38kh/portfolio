import { createClient } from "next-sanity";

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
      _title,
      'slug': slug.current,
      'image': photo.asset->url,
      _description,
    }`;

    const books = await client.fetch(query);
    return books;
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return [];
  }
}
export async function getTechData() {
  try {
    const query = `*[_type == "icons"]{
      id,
      'technologies': technologies[]{name, 'image': icon.asset->url},
      'tools': tools[]{name, 'image': icon.asset->url}
    }`;

    const icons = await client.fetch(query);
    return icons;
  } catch (error) {
    console.error("Failed to fetch icons:", error);
    return [];
  }
}

export async function getProjectData() {
  try {
    const query = `*[_type == "project"]{
      _id,
      title,
      'picture': picture.asset->url,
      description,
      'icons': icons[]{name, 'image': icon.asset->url},
      codeLink,
      liveSiteLink,
    }`;

    const projects = await client.fetch(query);
    return projects;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}
