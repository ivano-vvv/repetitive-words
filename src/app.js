import { addWordUI as _addWordUI } from "./ui/add-word.js";
import { mainUI as _mainUI } from "./ui/main.js";
import { practiceWordUI as _practiceWordUI } from "./ui/practice-word.js";
import { init as initStore } from "./store/index.js";

const { addWord, getWord } = await initStore();

mainUI();

function mainUI() {
    _mainUI({
        onAddWord: () => addWordUI(),
        onPracticeWord: () => practiceWordUI(),
        onExit: () => handleExit(),
    });

    function handleExit() {
        console.log("Bye :3");
        setTimeout(() => process.exit(), 3000);
    }
}

function addWordUI() {
    _addWordUI({
        onSave: async (w) => handleSave(w),
        onCancel: () => mainUI(),
    });

    async function handleSave(w) {
        await addWord(w);
        console.log(`Word "${w}" succesfully added`);
        mainUI();
    }
}

async function practiceWordUI() {
    const word = await getWord();

    if (!word) {
        console.log('Sorry, you have no words. Please, use "Add Word option"');
        mainUI();
        return;
    }

    _practiceWordUI(word, {
        onChoose: () => addWord(word),
        onFinish: () => mainUI(),
    });
}
