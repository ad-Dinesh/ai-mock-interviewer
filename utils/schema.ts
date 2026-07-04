import { pgTable, serial, text, varchar,integer,timestamp } from "drizzle-orm/pg-core";

export const MockInterview = pgTable("mockInterview", {
  id: serial("id").primaryKey(),

  jsonMockResp: text("jsonMockResp").notNull(),

  jobPosition: varchar("jobPosition", { length: 255 }).notNull(),

  jobDesc: text("jobDesc").notNull(),

  jobExperience: varchar("jobExperience", { length: 50 }).notNull(),

  createdBy: varchar("createdBy", { length: 255 }).notNull(),

  createdAt: varchar("createdAt", { length: 255 }).notNull(),
});

export const UserAnswer = pgTable("userAnswer", {
  id: serial("id").primaryKey(),

  mockIdRef: integer("mockIdRef").notNull(),

  question: text("question").notNull(),

  correctAnswer: text("correctAnswer").notNull(),

  userAnswer: text("userAnswer").notNull(),

  feedback: text("feedback"),

  rating: varchar("rating", { length: 10 }),

  userEmail: varchar("userEmail", { length: 255 }),

  createdAt: timestamp("createdAt").defaultNow(),
});