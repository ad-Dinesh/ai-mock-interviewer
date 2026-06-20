import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-violet-600 via-indigo-600 to-slate-900 p-16 text-white">
          <div>
            <h1 className="text-6xl font-bold leading-tight">
              AI Mock
              <br />
              Interview
            </h1>

            <p className="mt-6 text-lg text-slate-200">
              Practice real interview questions, receive AI-powered
              feedback, and improve your confidence before your next job
              interview.
            </p>

            <div className="mt-10 space-y-4">
              <div>✓ AI Generated Questions</div>
              <div>✓ Instant Feedback</div>
              <div>✓ Performance Analysis</div>
              <div>✓ Interview History</div>
            </div>
          </div>
        </div>

        <div className="bg-white flex items-center justify-center p-8">
          <SignIn />
        </div>

      </div>
    </div>
  );
}