// import React, { useEffect, useState } from "react";
// import { getTechData } from "@/sanity/schemaTypes/sanity-utils";
// import { Tech } from "./TechCardWrapper";
// import { IconsResponse } from "@/types";

// type TechCardProps = {
//   type: Tech;
// };

// const technologiesInfo = ({ any }: IconsResponse) => {
//   return (
//     <div className="flex h-full flex-col flex-wrap content-start gap-6">
//       <span className="text-xl font-bold md:text-2xl">Technologies</span>
//       <ul className="flex flex-wrap gap-2 md:gap-4">
//         {any?.map((icon: any, idx: number) => (
//           <li key={idx} className="flex flex-col items-center">
//             <img
//               src={icon?.image}
//               alt={icon.name}
//               className="h-10 w-10 md:h-14 md:w-14"
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const TechCard: React.FC<TechCardProps> = ({ type }) => {
//   const [icons, setIcons] = useState<any>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getTechData();
//       setIcons(data);
//     };

//     fetchData();
//   }, []);

//   if (!icons) {
//     return <div>Loading...</div>;
//   }

//   if (type === Tech.Technologies) {
//     const technologies = icons?.at(0)?.technologies;
//     return technologiesInfo(technologies);
//   } else {
//     const tools = icons?.at(0)?.tools;
//     return technologiesInfo(tools);
//   }
// };

// export default TechCard;

import React, { useEffect, useState } from "react";
import { getTechData } from "@/sanity/schemaTypes/sanity-utils";
import { Tech } from "./TechCardWrapper";
import { IconsResponse } from "@/types";

type TechCardProps = {
  type: Tech;
};

type IconProps = {
  icons: { name: string; image: string }[];
  title: string;
};

const IconList: React.FC<IconProps> = ({ icons, title }) => {
  return (
    <div className="flex h-full flex-row flex-wrap content-start gap-6">
      <span className="w-full text-xl font-bold md:text-2xl">{title}</span>
      <ul className="flex flex-wrap gap-2 md:gap-4">
        {icons.map((icon, idx) => (
          <li key={idx} className="flex flex-col items-center">
            <img
              src={icon.image}
              alt={icon.name}
              className="h-10 w-10 md:h-14 md:w-14"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const TechCard: React.FC<TechCardProps> = ({ type }) => {
  const [icons, setIcons] = useState<IconsResponse[] | null>(null);

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

  const iconSet = icons[0];

  if (type === Tech.Technologies) {
    return <IconList icons={iconSet.technologies} title="Technologies" />;
  } else {
    return <IconList icons={iconSet.tools} title="Tools" />;
  }
};

export default TechCard;
