import inquirer from "inquirer";

export async function practiceWordUI(word, { onChoose, onFinish }) {
    const choices = ["Easy", "Normal", "Hard"];

    const { action } = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: `Word: ${word}`,
            choices: choices,
        },
    ]);

    onChoose(action);
    onFinish();
}
