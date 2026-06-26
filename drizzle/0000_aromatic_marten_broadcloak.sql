CREATE TABLE "mockInterview" (
	"id" serial PRIMARY KEY NOT NULL,
	"jsonMockResp" text NOT NULL,
	"jobPosition" varchar(255) NOT NULL,
	"jobDesc" text NOT NULL,
	"jobExperience" varchar(50) NOT NULL,
	"createdBy" varchar(255) NOT NULL,
	"createdAt" varchar(255) NOT NULL
);
