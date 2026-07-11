"use client";

import { useMemo, useState } from "react";

import InterviewCard from "./InterviewCard";
import SearchBar from "./SearchBar";

interface Props {
  interviews: any[];
  totalInterviews: number;
  latestRole: string;
  latestExperience: string;
}

export default function DashboardContent({
    interviews,
    totalInterviews,
    latestRole,
    latestExperience
}: Props) {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("newest");

    const filtered = useMemo(() => {
        const data = interviews.filter((item) => {
            const value = search.toLowerCase();

            return (
                item.jobPosition.toLowerCase().includes(value) ||
                item.jobDesc.toLowerCase().includes(value)
            );
        });

        switch (sortBy) {
            case "oldest":
                data.sort(
                    (a, b) =>
                        new Date(a.createdAt).getTime() -
                        new Date(b.createdAt).getTime()
                );
                break;

            case "az":
                data.sort((a, b) =>
                    a.jobPosition.localeCompare(b.jobPosition)
                );
                break;

            case "za":
                data.sort((a, b) =>
                    b.jobPosition.localeCompare(a.jobPosition)
                );
                break;

            default:
                data.sort(
                    (a, b) =>
                        new Date(b.createdAt).getTime() -
                        new Date(a.createdAt).getTime()
                );
        }

        return data;
    }, [interviews, search, sortBy]);

    return (
        <>
            <SearchBar
                value={search}
                onChange={setSearch}
            />
              <div className="mb-6 flex justify-end">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="rounded-lg border border-slate-200 px-4 py-2 text-sm"
                >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="az">A → Z</option>
                    <option value="za">Z → A</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map((interview) => (
                    <InterviewCard
                        key={interview.id}
                        interview={interview}
                    />
                ))}
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 mb-8">

  <div className="rounded-2xl border bg-white p-6 shadow-sm">
    <p className="text-sm text-slate-500">
      Total Interviews
    </p>

    <h2 className="mt-2 text-3xl font-bold">
      {totalInterviews}
    </h2>
  </div>

  <div className="rounded-2xl border bg-white p-6 shadow-sm">
    <p className="text-sm text-slate-500">
      Latest Role
    </p>

    <h2 className="mt-2 text-2xl font-bold">
      {latestRole}
    </h2>
  </div>

  <div className="rounded-2xl border bg-white p-6 shadow-sm">
    <p className="text-sm text-slate-500">
      Average Experience
    </p>

    <h2 className="mt-2 text-3xl font-bold">
      {latestExperience} yrs
    </h2>
  </div>

  <div className="rounded-2xl border bg-white p-6 shadow-sm">
    <p className="text-sm text-slate-500">
      AI Status
    </p>

    <h2 className="mt-2 text-2xl font-bold text-green-600">
      Ready
    </h2>
  </div>

</div>
          
        </>
    );
}