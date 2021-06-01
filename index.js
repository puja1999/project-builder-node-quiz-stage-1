const fs = require("fs");
const quiz = require('./quiz');

// fetching data from quiz.js file
fs.writeFileSync("quiz.json", JSON.stringify({ question : [] }))

// reading data of quiz.json file
const quizJson = JSON.parse(fs.readFileSync("quiz.json"))

// appending data 
quizJson.question.push(quiz())

// updating json file  
fs.writeFileSync("quiz.json", JSON.stringify(quizJson))