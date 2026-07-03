import { db } from "@/lib/db";
import { MockInterview } from "@/utils/schema";

export default async function Home() {
  const result = await db.select().from(MockInterview);
  

return (
  <div>
    <pre>{JSON.stringify(result, null, 2)}</pre>
  </div>
);
}