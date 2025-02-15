import { exhibitsTable, visitorsTable } from '../db/schema.ts'
import { sql } from 'drizzle-orm'
import { db } from '../db/connect.ts'

export const recordVisit = async (exhibitId: string, visitorId: string) => {
    return await db.transaction(async (tx) => {
      
        await tx.insert(visitorsTable).values({
            visitor_id: visitorId,
            exhibit_id: exhibitId,
        })
             
        await tx
            .update(exhibitsTable)
            .set({
                visitor_count: sql`${exhibitsTable.visitor_count} + 1`,
            })
            .where(sql`${exhibitsTable.id} = ${exhibitId}`)
    })
}
