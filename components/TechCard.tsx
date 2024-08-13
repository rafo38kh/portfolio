import { getTechData } from "@/sanity/schemaTypes/sanity-utils";

export default async function TechCard() {
  const icons = await getTechData();

  return (
    <div className="flex w-full flex-row items-center justify-between gap-4 rounded-3xl bg-cardBackground p-4">
      <ul className="flex w-full flex-row flex-wrap content-start gap-2">
        <span className="text-xl font-bold">Technologies</span>
        {icons?.map((iconCategory, index) => (
          <li key={index}>
            <ul className="flex flex-wrap gap-2">
              {iconCategory.technologies?.map((icon, idx) => (
                <li key={idx} className="flex flex-col items-center">
                  <img src={icon.image} alt={icon.name} className="h-10 w-10" />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className="flex h-10 flex-col items-center justify-center gap-2 rounded-full bg-[#2E3848] p-[6px]">
        <span className="h-2 w-2 rounded-full bg-slate-600" />
        <span className="h-2 w-2 rounded-full bg-slate-600" />
      </div>
    </div>
  );
}
