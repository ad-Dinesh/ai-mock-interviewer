"use client";

import { useMemo, useState } from "react";

import InterviewCard from "./InterviewCard";
import SearchBar from "./SearchBar";

interface Props {
  interviews: any[];
}

export default function DashboardContent({
  interviews,
}: Props) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return interviews.filter((item) => {
      const value = search.toLowerCase();

      return (
        item.jobPosition.toLowerCase().includes(value) ||
        item.jobDesc.toLowerCase().includes(value)
      );
    });
  }, [interviews, search]);

  return (
    <>
      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((interview) => (
          <InterviewCard
            key={interview.id}
            interview={interview}
          />
        ))}
      </div>
    </>
  );
}