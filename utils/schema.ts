import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview = pgTable("mockInterview", {
  id: serial("id").primaryKey(),

  jsonMockResp: text("jsonMockResp").notNull(),

  jobPosition: varchar("jobPosition", { length: 255 }).notNull(),

  jobDesc: text("jobDesc").notNull(),

  jobExperience: varchar("jobExperience", { length: 50 }).notNull(),

  createdBy: varchar("createdBy", { length: 255 }).notNull(),

  createdAt: varchar("createdAt", { length: 255 }).notNull(),
});