"use client";
import { useState } from "react";

import TechCard from "./TechCard";

export enum Tech {
  Technologies = "technologies",
  Tool = "tool",
}

export default function TechCardWrapper() {
  const [cardType, setCardType] = useState<Tech>(Tech.Technologies);

  return (
    <div className="border-cardBorder flex w-full flex-row items-center justify-between gap-4 rounded-3xl border bg-cardBackground p-4">
      <TechCard type={cardType} />

      <div className="flex h-10 flex-col items-center justify-center gap-2 rounded-full bg-[#2E3848] p-[6px]">
        <button
          onClick={() => setCardType(Tech?.Technologies)}
          className="h-2 w-2 rounded-full bg-slate-600"
        />
        <button
          onClick={() => setCardType(Tech?.Tool)}
          className="h-2 w-2 rounded-full bg-slate-600"
        />
      </div>
    </div>
  );
}
