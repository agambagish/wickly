import { relations } from "drizzle-orm";
import {
  boolean,
  decimal,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const optionEnum = pgEnum("option", ["YES", "NO"]);
export const transactionTypeEnum = pgEnum("transaction_type", [
  "deposit",
  "trade",
  "payout",
]);
export const roleEnum = pgEnum("role", ["user", "admin"]);

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  clerkId: varchar({ length: 36 }).notNull().unique(),
  role: roleEnum().default("user").notNull(),
  balance: decimal({ precision: 10, scale: 2 }).notNull().default("0.00"),
});

export const markets = pgTable("markets", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: text(),
  yesPrice: decimal({ precision: 5, scale: 2 }).default("50.00"),
  noPrice: decimal({ precision: 5, scale: 2 }).default("50.00"),
  isClosed: boolean().default(false),
  result: optionEnum(),
  createdAt: timestamp().defaultNow(),
});

export const trades = pgTable("trades", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer()
    .references(() => users.id)
    .notNull(),
  marketId: integer()
    .references(() => markets.id)
    .notNull(),
  option: optionEnum().notNull(),
  quantity: integer().notNull(),
  pricePerShare: decimal({ precision: 5, scale: 2 }).notNull(),
  createdAt: timestamp().defaultNow(),
});

export const transactions = pgTable("transactions", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer()
    .references(() => users.id)
    .notNull(),
  type: transactionTypeEnum().notNull(),
  amount: decimal({ precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp().defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  trades: many(trades),
  transactions: many(transactions),
}));

export const marketsRelations = relations(markets, ({ many }) => ({
  trades: many(trades),
}));

export const tradesRelations = relations(trades, ({ one }) => ({
  user: one(users, {
    references: [users.id],
    fields: [trades.userId],
  }),
  market: one(markets, {
    references: [markets.id],
    fields: [trades.marketId],
  }),
}));

export const transactionsRelations = relations(transactions, ({ one }) => ({
  user: one(users, {
    references: [users.id],
    fields: [transactions.userId],
  }),
}));

export type User = typeof users.$inferSelect;
export type Market = typeof markets.$inferSelect;
export type Trade = typeof trades.$inferSelect;
export type Transaction = typeof transactions.$inferSelect;
