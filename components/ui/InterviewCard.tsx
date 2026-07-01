import { Button } from "@/components/ui/button";

interface InterviewCardProps {
  interview: any;
}

export default function InterviewCard({
  interview,
}: InterviewCardProps) {
  return (
    <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-bold">
        {interview.jobPosition}
      </h2>

      <p className="text-gray-500 mt-2">
        Experience: {interview.jobExperience} Years
      </p>

      <p className="text-gray-500 text-sm mt-1">
        {interview.createdAt}
      </p>

      <Button className="w-full mt-5">
        Start Interview
      </Button>
    </div>
  );
}