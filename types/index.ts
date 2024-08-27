export type Book = {
  _id: string;
  title: string;
  image: string;
  isRead: string;
  author: string;
};

export type Project = {
  _id: string;
  _type: "project";
  title: string;
  description: string;
  picture: string;
  icons: Icon[];
  codeLink: string;
  liveSiteLink: string;
};

export type Icons = {
  _id: string;
  technologies: {
    name: string;
    icon: {
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
      };
    };
  }[];
  tools: {
    name: string;
    icon: {
      _type: "image";
      asset: {
        _ref: string;
        _type: "reference";
      };
    };
  }[];
};

type Icon = {
  name: string;
  image: string;
};

export type IconsResponse = {
  _id: string;
  technologies: Icon[];
  tools: Icon[];
};
