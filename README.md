<p align="center">
  <img src="https://img.shields.io/badge/AI%20MOCK%20INTERVIEW-000000?style=for-the-badge&labelColor=000000&color=6366F1" alt="AI Mock Interview" />
</p>

<h1 align="center">Practice interviews. Get real feedback. Land the job.</h1>

<p align="center">
  An AI-powered mock interview platform that generates role-specific questions,<br/>
  listens to your spoken answers, and gives you instant, structured feedback — powered by Google Gemini.
</p>

<p align="center">
  <a href="https://ai-mock-interviewer-red.vercel.app/"><strong>🔗 Try the Live App »</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white" />
  <img src="https://img.shields.io/badge/Google_Gemini-8E75B2?style=flat-square&logo=googlegemini&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" />
</p>

<p align="center">
  <img src="./screenshots/hero-banner.png" alt="AI Mock Interview screenshot" width="850"/>
</p>

<br/>

## The problem

Most people freeze in interviews not because they don't know the material — because they haven't *practiced saying it out loud*, under pressure, with feedback on what's actually working.

**AI Mock Interview** fixes that. Pick a role, speak your answers like a real interview, and get a Gemini-generated score, feedback, and a model answer — every single time.

<br/>

## ✦ What it does

<table>
<tr>
<td width="50%" valign="top">

**🎯 Personalized sessions**
Interviews built around your job title, description, and years of experience — not a generic question bank.

**🎙️ Voice-first practice**
Answer out loud. Speech-to-text captures it, just like a real interview.

**⚡ Instant AI feedback**
Gemini rates each answer, flags gaps, and shows you what a stronger response looks like.

</td>
<td width="50%" valign="top">

**📊 Real progress tracking**
Every interview, question, and score is saved — searchable, reviewable, deletable.

**📚 A growing question bank**
Revisit past questions and recommended answers whenever you want to brush up.

**🔐 Secure by default**
Clerk-based auth, environment-scoped secrets, nothing exposed client-side.

</td>
</tr>
</table>

<br/>

## ✦ How it works

```
 1. Describe the role   →   2. Gemini writes questions   →   3. You answer by voice
        ↓                                                            ↓
 6. Track progress over time   ←   5. Review scored feedback   ←   4. Gemini evaluates it
```

| Step | What happens |
|:--|:--|
| **1. Set up the interview** | Enter job position, job description, and years of experience. |
| **2. Questions are generated** | Gemini creates a set of technical questions tailored to that role. |
| **3. You answer live** | Voice input + webcam, one question at a time, just like the real thing. |
| **4. Gemini evaluates you** | Each answer gets a rating, feedback, improvement notes, and a model answer. |
| **5. Review the report** | A full breakdown — overall score plus question-by-question analysis. |
| **6. Build a track record** | History, question bank, and past feedback are all saved for later. |

<br/>

## ✦ Built with

| Layer | Stack |
|:--|:--|
| **Frontend** | Next.js · React · TypeScript · Tailwind CSS · shadcn/ui · Lucide Icons |
| **AI** | Google Gemini API |
| **Backend** | Next.js API Routes |
| **Database** | PostgreSQL (Neon) · Drizzle ORM |
| **Auth** | Clerk |
| **Hosting** | Vercel |

<br/>

## ✦ A tour of the app

<table>
<tr>
<td width="50%">
<img src="./screenshots/dashboard.png" width="400"/>
<p align="center"><b>Dashboard</b><br/><sub>Create, search, and manage every mock interview.</sub></p>
</td>
<td width="50%">
<img src="./screenshots/interview-page.png" width="400"/>
<p align="center"><b>Live Interview</b><br/><sub>Webcam, voice recording, and question navigation.</sub></p>
</td>
</tr>
<tr>
<td width="50%">
<img src="./screenshots/feedback-page.png" width="400"/>
<p align="center"><b>Feedback Report</b><br/><sub>Score, per-question analysis, and model answers.</sub></p>
</td>
<td width="50%">
<img src="./screenshots/question-bank.png" width="400"/>
<p align="center"><b>Question Bank</b><br/><sub>Every question and recommended answer, saved.</sub></p>
</td>
</tr>
</table>

> Drop your PNGs into a `/screenshots` folder at the repo root using the filenames above and these render automatically.

<br/>

## ✦ Run it locally

```bash
# 1. Clone
git clone https://github.com/ad-Dinesh/ai-mock-interviewer.git
cd ai-mock-interviewer

# 2. Install
npm install

# 3. Configure environment
cp .env.example .env.local   # then fill in the values below
```

`.env.local`

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Google Gemini
GOOGLE_GEMINI_API_KEY=your_gemini_api_key

# Database
DATABASE_URL=your_postgresql_connection_string
```

> ⚠️ Match `GOOGLE_GEMINI_API_KEY` exactly to whatever key name your code reads via `process.env`. If your codebase uses a different name, rename it here too — otherwise the app silently fails to reach Gemini.

```bash
# 4. Run
npm run dev
```

Then open **http://localhost:3000**.

<br/>

## ✦ Project structure

```
ai-mock-interviewer/
├── app/
│   ├── api/                 # Route handlers (Gemini calls, DB writes)
│   ├── dashboard/
│   │   ├── history/         # Past interview sessions
│   │   ├── interview/       # Live interview flow
│   │   └── questions/       # Question bank
│   ├── how-it-works/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── landing/              # Marketing / landing page UI
│   └── ui/                   # shadcn/ui primitives
├── lib/
│   └── db.ts                 # Drizzle + Neon client
├── utils/
│   └── schema.ts              # Drizzle schema definitions
├── public/
├── .gitignore
├── package.json
└── README.md
```

<br/>

## ✦ Security

- All secrets (DB URL, Clerk keys, Gemini key) live in environment variables — never hard-coded.
- `.env` and `.env.local` are git-ignored by default.
- No credentials are ever exposed to the client bundle.

```gitignore
.env
.env.local
```

<br/>

## ✦ Roadmap

- [ ] Interview timer
- [ ] Advanced performance analytics & charts
- [ ] PDF feedback report export
- [ ] Dark mode
- [ ] Behavioral interview mode
- [ ] System design interview mode
- [ ] Adjustable difficulty levels
- [ ] Improved speech recognition accuracy
- [ ] Multi-language interview support

<br/>

## ✦ About

Built by **Dinesh Dharavath** — B.Tech, Computer Science & Engineering, Indian Institute of Information Technology, Design and Manufacturing, Jabalpur.

<p>
  <a href="https://github.com/ad-Dinesh">GitHub</a> ·
  <a href="https://ai-mock-interviewer-red.vercel.app/">Live Demo</a>
</p>

**Powered by:** [Google Gemini](https://ai.google.dev/) · [Clerk](https://clerk.com/) · [Neon](https://neon.tech/) · [Drizzle ORM](https://orm.drizzle.team/) · [Vercel](https://vercel.com/)

This project is built for educational and portfolio purposes.

<br/>

<p align="center">
  <sub>If this project helped you, consider starring the repo ⭐</sub>
</p>
