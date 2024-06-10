import inquirer from "inquirer";
async function MessageProject() {
    console.log("Welcome!!!");
    const userInput1 = await inquirer.prompt({
        name: "input",
        message: "Kis se baat karna chahte hain",
        type: "list",
        choices: ["Khud se", "teacher"],
    });
    if (userInput1.input == "Khud se") {
        console.log("ap khud se baat kr rhe hain!");
        setTimeout(() => {
            console.log("me bohat acha programmer banun ga (Inshallah)");
        }, 1000);
        setTimeout(() => {
            console.log("me humesha consistent rahon ga");
        }, 4000);
        setTimeout(() => {
            console.log("me khud per bharosa karun ga");
        }, 6000);
    }
    else if (userInput1.input == "teacher") {
        const userInput2 = await inquirer.prompt({
            name: "teachers",
            type: "list",
            message: "ap kis teacher se baat karna chahte hain",
            choices: ["Sir Bilal", "Miss Atia", "Sir Aneeq"],
        });
        let teacher = userInput2.teachers;
        console.log(`Hello! I am ${teacher}.`);
        let userInput3 = await inquirer.prompt({
            name: "question",
            type: "list",
            choices: [
                "Quiz ki date kia hai?",
                "Quiz me kese questions ayenge?",
                "Kia me aik acha student hun?",
            ],
        });
        if (userInput3.question == "Quiz ki date kia hai?") {
            console.log("Not confirm yet but exams maybe conducted after EID");
        }
        else if (userInput3.question == "Quiz me kese questions ayenge?") {
            console.log("Inshallah jo topics apne class me cover kie hain un se related hi ayen ge.");
        }
        else if (userInput3.question == "Kia me aik acha student hun?") {
            console.log("YES! definitely you are because ap hard working or consistent hain.");
        }
    }
}
MessageProject();
