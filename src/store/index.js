import { init as initDb } from "./database.js";
import { StoreStructure } from "./structure.js";

export async function init() {
    const db = await initDb({ root: null });
    const store = new StoreStructure(db.data.root);

    return {
        addWord,
        getWord,
    };

    async function addWord(w) {
        store.insert(w);
        db.data.root = store.root;
        await db.write();
    }

    async function getWord() {
        const word = store.findEarliest();
        db.data.root = store.root;
        await db.write();
        return word;
    }
}
