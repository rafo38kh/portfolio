import React, { useEffect, useState } from "react";
import { getTechData } from "@/sanity/schemaTypes/sanity-utils";
import { Tech } from "./TechCardWrapper";

type TechCardProps = {
  type: Tech;
};

const TechCard: React.FC<TechCardProps> = ({ type }) => {
  const [icons, setIcons] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTechData();
      setIcons(data);
    };

    fetchData();
  }, []);

  if (!icons) {
    return <div>Loading...</div>;
  }

  if (type === Tech.Technologies) {
    const technologies = icons?.at(0)?.technologies;

    return (
      <div className="flex flex-col flex-wrap content-start gap-2 md:h-full">
        <span className="text-xl font-bold">Technologies</span>
        <ul className="flex flex-wrap gap-2">
          {technologies?.map((icon: any, idx: number) => (
            <li key={idx} className="flex flex-col items-center">
              <img
                src={icon?.image}
                alt={icon.name}
                className="h-10 w-10 md:h-14 md:w-14"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    const tools = icons?.at(0)?.tools;

    return (
      <div className="flex flex-col flex-wrap content-start gap-2 md:h-full">
        <span className="text-xl font-bold">Tools</span>
        <ul className="flex flex-wrap gap-2">
          {tools?.map((icon: any, idx: number) => (
            <li key={idx} className="flex flex-col items-center">
              <img src={icon?.image} alt={icon.name} className="h-10 w-10" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default TechCard;
