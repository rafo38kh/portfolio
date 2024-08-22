import BooksCard from "@/components/BooksCard";
import InfoCard from "@/components/InfoCard";
import ProjectsCard from "@/components/ProjectsCard";
import TechCardWrapper from "@/components/TechCardWrapper";

export default function Home() {
  return (
    <div className="flex max-w-full flex-col gap-4 p-4">
      <InfoCard />
      <div className="grid gap-4 md:grid-cols-2 md:flex-row">
        <TechCardWrapper />
        <BooksCard />
      </div>
      <ProjectsCard />
    </div>
  );
}
