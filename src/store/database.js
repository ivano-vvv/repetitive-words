import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

export async function init(initialState) {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    const filePath = join(currentDir, "./_data/db.json");
    const adapter = new JSONFile(filePath);
    const db = new Low(adapter, initialState);
    
    if (!(await db.read())) {
        db.write()
    }

    return db;
}
