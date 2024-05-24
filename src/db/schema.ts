import { sql } from "drizzle-orm";
import { serial, varchar, pgTable, date, integer, foreignKey, text, uniqueIndex } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial("id").primaryKey()
})

export const registrations = pgTable('registrations', {
    id: serial("id").primaryKey(),
    date: date("date").default(sql`CURRENT_DATE`),
    gameName: varchar("gameName", { length: 100 }).unique().notNull(),
    description: text("description").notNull(),
    voteCount: integer("voteCount"),
    userId: integer("userId"),
    voteId: integer("voteId").unique()
}, (t) => {
    return {
        gameNameIdx: uniqueIndex("gameNameIdx").on(t.gameName),
        userRelation: foreignKey({
            columns: [t.userId],
            foreignColumns: [users.id],
            name: "userRelation"
        })
    }
});
