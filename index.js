#! /usr/bin/env node 
import inquirer from "inquirer";
console.log(chalk.bgMagentaBright.italic(" \t\ welcome to `MAHEEN IMTIAZ` Quiz Game!!!  \t"));
import chalk from "chalk";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "what is AI?",
        choices: ["Artificial Intelligence", "Artificial InterneT", "Argent Intelligence"]
    },
    {
        name: "question_2",
        type: "list",
        message: "To use TypeScript in a project, which of the following must be installed? ?",
        choices: [" TypeScript compiler (tsc)", "Node.js runtime", "Visual Studio Code", "D. All of the above"]
    },
    {
        name: "question_3",
        type: "list",
        message: " Which TypeScript feature allows you to combine types together to form a new type ?",
        choices: ["Interfaces", "Classes", " Enums", " union typesU"] // uniontype
    },
    {
        name: "question_4",
        type: "list",
        message: "What does TypeScript use to help catch common bugs as you write code ?",
        choices: ["Type annotations", "JavaScript comments", " HTML templates", "CSS selectors"] //a
    },
    {
        name: "question_5",
        type: "list",
        message: "which method inquirer.js is used to start a prompt interface and recieve user input?",
        choices: ["start()", "prompt()", "init()", "run()"]
    },
    {
        name: "question_6",
        type: "list",
        message: "which of the following is not a valid TypeScript primitive type?",
        choices: ["string", " number", "boolean", "arraay"]
    },
    {
        name: "question_7",
        type: "list",
        message: "How can you define an optional property in an interface in TypeScript??",
        choices: ["By using the 'optional' keyword", "By using the 'maybe' keyword", "By using the '?' symbol after the property name"]
    },
    {
        name: "question_8",
        type: "list",
        message: "What does the 'interface' keyword do in TypeScript??",
        choices: ["type assertions", "type guards", "type aliases", "type parameters"] //4
    },
    {
        name: "question_9",
        type: "list",
        message: "Which TypeScript feature allows you to reuse code across different types while still maintaining type safety??",
        choices: ["type assertion", "interfaces", "genrecies", "type guard"] //gen
    },
    {
        name: "question_10",
        type: "list",
        message: "What is the TypeScript equivalent of an array in JavaScript?",
        choices: ["array", "list ", "tupples", "collection"] //array
    },
]);
let score = 0;
if (quiz.question_1 === "Artificial Intelligence") {
    console.log("1. correct");
    score++;
}
else {
    console.log("1. incorrect");
}
if (quiz.question_2 === "All of the above") {
    console.log("2 .correct");
    score++;
}
else {
    console.log("2. incorrect");
}
if (quiz.question_3 === "union typesU") {
    console.log("3. correct");
    score++;
}
else {
    console.log("3. incorrect");
}
if (quiz.question_4 === "Type annotations") {
    console.log("4 .correct");
    score++;
}
else {
    console.log("4. incorrect");
}
if (quiz.question_5 === "prompt()") {
    console.log("5 . correct");
    score++;
}
else {
    console.log("5. incorrect");
}
if (quiz.question_6 === "array") {
    console.log("6 . correct");
    score++;
}
if (quiz.question_7 === "By using the '?' symbol after the property name") {
    console.log("7 . correct");
    score++;
}
else {
    console.log("7. incorrect");
}
if (quiz.question_8 === "type parameters") {
    console.log("8 . correct");
    score++;
}
else {
    console.log("8. incorrect");
}
if (quiz.question_9 === "genrecies") {
    console.log("9 . correct");
    score++;
}
else {
    console.log("9. incorrect");
}
if (quiz.question_10 === "array") {
    console.log("10 . correct");
    score++;
}
else {
    console.log("10. incorrect");
}
console.log(chalk.bgGreenBright(`you have  ${score} scored`));
