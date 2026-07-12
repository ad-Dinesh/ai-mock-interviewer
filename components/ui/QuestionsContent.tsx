"use client";

import { useMemo, useState } from "react";
import QuestionBankCard from "./QuestionBankCard";

interface Props {
  interviews: any[];
}

export default function QuestionsContent({
  interviews,
}: Props) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return interviews.filter((item) =>
      item.jobPosition
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, interviews]);

  return (
    <>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-violet-500"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed bg-white py-16 text-center">
          <h3 className="text-xl font-semibold">
            No interviews found
          </h3>

          <p className="mt-2 text-slate-500">
            Try another search keyword.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {filtered.map((interview) => (
            <QuestionBankCard
              key={interview.id}
              interview={interview}
            />
          ))}
        </div>
      )}
    </>
  );
}