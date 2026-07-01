import { db } from "@/lib/db";
import { MockInterview } from "@/utils/schema";
import AddNewInterview from "@/components/ui/AddNewInterview";
import InterviewCard from "@/components/ui/InterviewCard";

export default async function Dashboard() {
  const interviews = await db.select().from(MockInterview);

  return (
    <div className="p-10">
      <AddNewInterview />



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {interviews.map((interview) => (
          <InterviewCard
            key={interview.id}
            interview={interview}
          />
        ))}
      </div>
    </div>
    
  );
}