import inquirer from "inquirer";

export async function mainUI({ onAddWord, onPracticeWord, onExit }) {
    const choices = ["Add Word", "Practice Word", "Quit"];

    const { action } = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "Choose an action:",
            choices: choices,
        },
    ]);

    switch (action) {
        case choices[0]:
            onAddWord();
            break;
        case choices[1]:
            onPracticeWord();
            break;
        case choices[2]:
            onExit();
            break;
        default:
            throw new Error("unknown option");
    }
}
