"use client";

import React, { useEffect, useState } from "react";
import { getProjectData } from "@/sanity/schemaTypes/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/types";

// NOTE: remove later
// @ts-ignore
const Accordion = ({ i, title, expanded, setExpanded, children }) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#c8d5e0" : "#4f5b66" }}
        onClick={() => setExpanded(isOpen ? null : i)}
        className="w-full rounded-full bg-[#4f5b66] p-2 text-center"
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
  const [expanded, setExpanded] = useState<null | number>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjectData();
        setProjectData(data);
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
    <ul className="border-cardBorder flex w-full flex-col gap-2 rounded-3xl border bg-cardBackground p-4">
      <span className="text-xl font-bold">Projects</span>
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
            <div className="flex flex-col gap-4">
              <span className="text-xl font-bold">{project?.title}</span>
              <p className="text-xs">{project?.description}</p>
              <div className="flex w-full flex-row items-center gap-2 overflow-hidden">
                <span className="w-full min-w-24">Tech stack</span>
                <ul className="no-scrollbar flex h-max items-center gap-1 overflow-x-scroll">
                  {/* @ts-ignore */}
                  {project?.icons?.map((icon: any, index: string) => (
                    <li key={index}>
                      <img
                        src={icon?.image}
                        alt={icon.name}
                        className="h-10 w-10 rounded-lg"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-row items-center justify-between gap-4">
                <Link
                  className="w-full rounded-full bg-[#4f5b66] p-2 text-center"
                  href={project?.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </Link>
                <Link
                  className="w-full rounded-full bg-[#4f5b66] p-2 text-center"
                  href={project?.liveSiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </Link>
              </div>
            </div>
          </li>
        </Accordion>
      ))}
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/rafo38kh"
        className="inline-block w-full rounded-full bg-[#4f5b66] p-2 text-center"
      >
        see more projects
      </Link>
    </ul>
  );
}
