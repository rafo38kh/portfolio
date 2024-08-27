import BooksCard from "@/components/BooksCard";
import InfoCard from "@/components/InfoCard";
import ProjectsCard from "@/components/ProjectsCard";
import TechCardWrapper from "@/components/TechCardWrapper";

export default function Home() {
  return (
    <div className="mx-auto my-10 flex h-full w-full max-w-[62rem] flex-col gap-4 p-4">
      <InfoCard />
      <div className="grid h-full grid-rows-[auto_1fr_1fr] gap-4 md:grid-cols-2 md:grid-rows-[auto_auto] md:flex-row">
        <TechCardWrapper />
        <BooksCard />
        <ProjectsCard />
      </div>
    </div>
  );
}
