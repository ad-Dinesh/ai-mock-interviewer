export default function Dashboard() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 lg:px-8">
      <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
          Dashboard
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
          AI Mock Interview Dashboard
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Review your latest sessions, start a new mock interview, and keep your
          feedback loop tight.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Sessions completed", "18"],
          ["Avg. confidence", "8.6/10"],
          ["Follow-up notes", "5 pending"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {value}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-950">Recent activity</h2>
          <div className="mt-5 space-y-4">
            {[
              ["System design mock", "Feedback added 2 hours ago"],
              ["Behavioral round", "Replayed with stronger STAR answers"],
              ["Frontend interview", "Confidence improved from last attempt"],
            ].map(([title, detail]) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
              >
                <h3 className="font-medium text-slate-950">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
            Next step
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            Start a fresh mock interview
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Pick a role, answer the first question, and compare your result with
            previous sessions.
          </p>
          <button className="mt-6 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200">
            Begin practice
          </button>
        </div>
      </section>
    </main>
  );
}