import { getProjectData } from "@/sanity/schemaTypes/sanity-utils";

import Image from "next/image";
import Link from "next/link";

export default async function ProjectsCard() {
  const projectData = await getProjectData();

  return (
    <div className="border-cardBorder w-full rounded-3xl border bg-cardBackground p-4">
      <ul className="flex flex-col gap-4">
        <span className="text-xl font-bold">Project</span>
        {projectData?.map((project, index) => (
          <li className="flex flex-col gap-4" key={index}>
            <Image
              className="w-full rounded-xl"
              src={project?.picture}
              height={300}
              width={300}
              alt="the project picture"
            />
            <div className="flex flex-col gap-4">
              <span className="text-xl font-bold">{project?.title}</span>
              <p className="text-xs">{project?.description}</p>
              <div className="flex flex-row items-center gap-4">
                <span>Tech stack</span>
                <ul className="flex items-center gap-1">
                  {project?.icons?.map((icon, index) => (
                    <li key={index}>
                      <Image
                        className="h-10 w-10 rounded-lg"
                        src={icon?.icon}
                        width={40}
                        height={40}
                        alt="Picture of the author"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-row items-center justify-between gap-4">
                <Link
                  className="w-full rounded-full bg-[#4f5b66] p-2 text-center"
                  href={project?.codeLink}
                >
                  Code
                </Link>
                <Link
                  className="w-full rounded-full bg-[#4f5b66] p-2 text-center"
                  href={project?.liveSiteLink}
                >
                  Live Site
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <ul className="mt-4 flex w-full flex-col items-center justify-center gap-4">
        <span className="w-full">Other projects</span>
        {projectData?.map((project, index) => (
          <li key={index} className="w-full">
            <button className="w-full rounded-full bg-[#4f5b66] p-2 text-center">
              {project?.title}
            </button>
          </li>
        ))}
        <Link
          href="https://github.com/rafo38kh"
          className="w-full rounded-full bg-[#4f5b66] p-2 text-center"
        >
          see more projects
        </Link>
      </ul>
    </div>
  );
}
