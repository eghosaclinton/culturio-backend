import { exhibitsTable, visitorsTable } from "../db/schema.ts";
import { sql } from "drizzle-orm";
import {db} from "../db/connect.ts"


export const recordVisit = async (exhibitId: string) => {
    return await db.transaction(async (tx) => {
        // Add visitor record
        await tx.insert(visitorsTable).values({
            exhibit_id: exhibitId
        });

        // Increment visitor count
        await tx
            .update(exhibitsTable)
            .set({
                visitor_count: sql`${exhibitsTable.visitor_count} + 1`
            })
            .where(sql`${exhibitsTable.id} = ${exhibitId}`);
    });
};