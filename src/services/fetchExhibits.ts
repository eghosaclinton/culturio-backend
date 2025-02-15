import { db } from '../db/connect.ts'
import { exhibitsTable } from '../db/schema.ts'

type Exhibits = {
    id: string
    title: string
    description: string
    media_url: string
    visitor_count: number
}

export async function fetchExhibits() {
    const exhibits: Exhibits[] = await db.select().from(exhibitsTable)

    return exhibits
}
