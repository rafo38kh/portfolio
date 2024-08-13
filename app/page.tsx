import BooksCard from "@/components/BooksCard";
import InfoCard from "@/components/InfoCard";
import ProjectsCard from "@/components/ProjectsCard";
import TechCard from "@/components/TechCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <InfoCard />
      <TechCard />
      <BooksCard />
      <ProjectsCard />
    </div>
  );
}
