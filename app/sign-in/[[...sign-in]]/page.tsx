import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    // Clean background that blends well with the container shadow
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 md:p-10">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-white">

        {/* Left Banner Column */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-b from-purple-600 via-indigo-600 to-indigo-950 p-16 text-white">
          <div className="max-w-md">
            {/* Serif font applied to match the elegant screenshot typography */}
            <h1 className="text-[3.25rem] font-medium font-serif leading-[1.1] tracking-wide">
              AI Mock
              <br />
              Interview
            </h1>

            {/* Adjusted font sizing and text color opacity */}
            <p className="mt-8 text-[1.05rem] text-slate-200/90 leading-relaxed font-sans font-light">
              Practice real interview questions, receive AI-powered
              feedback, and improve your confidence before your next job
              interview.
            </p>

            {/* Checked features with accurate gap spacing */}
            <div className="mt-12 space-y-5 text-[1.05rem] font-sans font-light text-slate-100">
              <div className="flex items-center gap-2"><span>✓</span> AI Generated Questions</div>
              <div className="flex items-center gap-2"><span>✓</span> Instant Feedback</div>
              <div className="flex items-center gap-2"><span>✓</span> Performance Analysis</div>
              <div className="flex items-center gap-2"><span>✓</span> Interview History</div>
            </div>
          </div>
        </div>

        {/* Right Authentication Column */}
        <div className="bg-white flex items-center justify-center p-8 md:p-12">
          {/* Clerk elements are customized via appearance prop to look sharp and seamless */}
          <SignIn 
            appearance={{
              elements: {
                rootBox: "w-full max-w-md",
                card: "shadow-none border-none p-0 w-full",
                headerTitle: "font-serif text-2xl font-medium text-slate-800",
                socialButtonsBlockButton: "border border-slate-200 hover:bg-slate-50 transition-colors duration-200",
                formButtonPrimary: "bg-slate-800 hover:bg-slate-700 text-white transition-colors duration-200",
                footer: "hidden" // Hides Clerk branding if you want a fully custom layout look
              }
            }}
          />
        </div>

      </div>
    </div>
  );
}