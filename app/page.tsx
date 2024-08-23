import BooksCard from "@/components/BooksCard";
import InfoCard from "@/components/InfoCard";
import ProjectsCard from "@/components/ProjectsCard";
import TechCardWrapper from "@/components/TechCardWrapper";

export default function Home() {
  return (
    <div className="mx-auto mt-10 flex h-screen w-full max-w-[65rem] flex-col gap-4 p-4">
      <InfoCard />
      <div className="grid h-full grid-rows-[auto_1fr_1fr] gap-4 md:grid-cols-2 md:flex-row">
        <TechCardWrapper />
        <BooksCard />
        <ProjectsCard />
      </div>
    </div>
  );
}
