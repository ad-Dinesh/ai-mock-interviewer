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
          
        </>
    );
}