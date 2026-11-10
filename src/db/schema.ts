import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  bookingReference: text("booking_reference").notNull().unique(),
  destinationSlug: text("destination_slug").notNull(),
  destinationName: text("destination_name").notNull(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  travelDate: text("travel_date").notNull(),
  travelers: integer("travelers").notNull(),
  notes: text("notes"),
  status: text("status").notNull().default("Confirmed"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
