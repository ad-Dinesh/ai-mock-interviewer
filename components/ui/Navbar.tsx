import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b p-4">
      <h1 className="text-xl font-bold">AI Mock Interview</h1>
      <UserButton />
    </nav>
  );
}