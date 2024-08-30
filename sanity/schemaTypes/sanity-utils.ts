import { Book, Project, Icons, IconsResponse } from "@/types";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-08-08",
  useCdn: true,
});

export async function getBooks(): Promise<Book[]> {
  try {
    const query = `*[_type == "book"]{
      _id,
      title,
      isRead,
      author,
      'image': photo.asset->url,
    }`;

    const books = await client.fetch(query);
    return books;
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return [];
  }
}
export async function getTechData(): Promise<IconsResponse[]> {
  try {
    const query = `*[_type == "icons"]{
      _id,
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

export async function getProjectData(): Promise<Project[]> {
  try {
    const query = `*[_type == "project"]{
      _id,
      title,
      'picture': picture.asset->url,
      description,
      'icons': icons[]{name, 'image': image.asset->url},
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
