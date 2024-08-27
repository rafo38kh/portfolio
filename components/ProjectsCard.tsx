"use client";

import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { getProjectData } from "@/sanity/schemaTypes/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/types";

type AccordionProps = {
  i: string;
  title: string;
  expanded: string | null;
  setExpanded: Dispatch<SetStateAction<string | null>>;
  children: ReactNode;
};

const Accordion = ({
  i,
  title,
  expanded,
  setExpanded,
  children,
}: AccordionProps) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#007ACC" : "#334462" }}
        onClick={() => setExpanded(isOpen ? null : i)}
        className="w-full rounded-full bg-white/10 p-2 text-center transition-all duration-300 hover:cursor-pointer hover:opacity-40"
      >
        {title}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{ collapsed: { scale: 0.6 }, open: { scale: 1 } }}
              transition={{ duration: 1 }}
              className="content-placeholder"
            >
              {children}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default function ProjectsCard() {
  const [projectData, setProjectData] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjectData();
        setProjectData(data);
        if (data.length > 0) {
          setExpanded(data[0]._id);
        }
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch project data:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Failed to load projects. Please try again later.</div>;
  }

  return (
    <div className="row-start-1 flex w-full flex-col gap-4 rounded-3xl border border-cardBorder bg-cardBackground p-4 md:col-span-2 md:row-start-2 md:row-end-2">
      <span className="text-xl font-bold md:text-2xl">Projects</span>

      <ul className="flex w-full flex-col gap-2">
        {projectData?.map((project) => (
          <Accordion
            i={project?._id}
            key={project?._id}
            expanded={expanded}
            title={project?.title}
            setExpanded={setExpanded}
          >
            <li
              key={project._id}
              className="mb-2 grid gap-4 md:grid-cols-2 md:gap-10"
            >
              <Image
                height={300}
                width={300}
                src={project?.picture}
                alt="the project picture"
                className="h-full w-full rounded-xl"
              />
              <div className="flex flex-col justify-between gap-4">
                <div className="grid gap-3">
                  <span className="text-xl font-bold">{project?.title}</span>
                  <p className="text-sm text-slate-200">
                    {project?.description}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex w-full flex-col justify-start gap-2 overflow-hidden">
                    <span className="inline-block w-max text-xs">
                      Tech stack
                    </span>
                    <ul className="no-scrollbar flex h-max w-full items-center gap-1 overflow-x-scroll">
                      {project?.icons?.map((icon, index) => (
                        <li key={icon?.name}>
                          <img
                            alt={icon?.name}
                            src={icon?.image}
                            className="h-8 w-8 rounded-lg md:h-10 md:w-10"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-4">
                    <Link
                      className="w-full rounded-full border border-linkColor bg-transparent p-2 text-center transition-all duration-300 hover:cursor-pointer hover:bg-linkColor"
                      href={project?.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </Link>
                    <Link
                      className="w-full rounded-full bg-linkColor p-2 text-center transition-all duration-300 hover:scale-105"
                      href={project?.liveSiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </Accordion>
        ))}
        <motion.div
          className="inline-block w-full rounded-full border border-linkColor bg-transparent p-2 text-center hover:bg-linkColor"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rafo38kh"
          >
            see more projects
          </Link>
        </motion.div>
      </ul>
    </div>
  );
}
