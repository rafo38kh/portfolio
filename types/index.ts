export type Book = {
  _id: string;
  title: string;
  image: string;
  description: string;
};

export type Project = {
  _id: string;
  _type: "project";
  title: string;
  description: string;
  picture: string;
  icons: {
    name: string;
    image: string;
  }[];
  codeLink: string;
  liveSiteLink: string;
};

export type Icons = {
  _id: string;
  technologies: {
    name: string;
    image: string;
  }[];
  tools: {
    name: string;
    image: string;
  }[];
};
