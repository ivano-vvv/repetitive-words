import inquirer from "inquirer";

export async function addWordUI({ onSave, onCancel }) {
    const { action: input } = await inquirer.prompt([
        {
            type: "input",
            name: "action",
            message: "Type a word (empty string for cancel):",
        },
    ]);

    if (input.trim() === "") {
        onCancel();
    } else {
        onSave(input.trim());
    }
}
