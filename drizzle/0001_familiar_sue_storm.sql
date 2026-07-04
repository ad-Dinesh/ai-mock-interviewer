CREATE TABLE "userAnswer" (
	"id" serial PRIMARY KEY NOT NULL,
	"mockIdRef" integer NOT NULL,
	"question" text NOT NULL,
	"correctAnswer" text NOT NULL,
	"userAnswer" text NOT NULL,
	"feedback" text,
	"rating" varchar(10),
	"userEmail" varchar(255),
	"createdAt" timestamp DEFAULT now()
);
