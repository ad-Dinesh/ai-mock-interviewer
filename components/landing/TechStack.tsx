import {
  Atom,
  Database,
  ShieldCheck,
  BrainCircuit,
  Server,
  Wind,
} from "lucide-react";

const techStack = [
  {
    name: "Next.js",
    icon: Atom,
  },
  {
    name: "React",
    icon: Atom,
  },
  {
    name: "Gemini AI",
    icon: BrainCircuit,
  },
  {
    name: "Clerk Auth",
    icon: ShieldCheck,
  },
  {
    name: "Drizzle ORM",
    icon: Database,
  },
  {
    name: "Tailwind CSS",
    icon: Wind,
  },
  {
    name: "Neon PostgreSQL",
    icon: Server,
  },
  {
    name: "TypeScript",
    icon: Atom,
  },
];

export default function TechStack() {
  return (
    <section className="bg-[#050816] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Powered By
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Modern Tech Stack
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Built with industry-standard technologies to deliver
            fast, secure and scalable AI interview experiences.
          </p>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-4">

          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur transition hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-600/10"
            >
              <tech.icon className="mx-auto h-10 w-10 text-violet-400 transition group-hover:scale-110" />

              <h3 className="mt-5 text-lg font-semibold text-white">
                {tech.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}