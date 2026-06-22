import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
        <div>
          <h1 className="text-xl font-bold">AI Mock Interview</h1>
          <p className="text-xs text-gray-500">
            Practice. Improve. Get Hired.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button>Create Interview</Button>
          <UserButton />
        </div>
      </div>
    </header>
  );
}