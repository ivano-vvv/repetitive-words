import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

export async function init(initialState) {
    const filePath = getPath();
    const adapter = new JSONFile(filePath);
    const db = new Low(adapter, initialState);

    if (!(await db.read())) {
        db.write();
    }

    return db;
}

function getPath() {
    if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
        return join(dirname(__dirname), "./db.json");
    } else {
        const currentDir = dirname(fileURLToPath(import.meta.url));
        return join(currentDir, "./data/db.json");
    }
}
