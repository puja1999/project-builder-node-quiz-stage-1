const fs = require("fs")
const quiz = require('./quiz')

fs.writeFileSync("quiz.json", JSON.stringify({ quiz : [] }))

const quizJson = JSON.parse(fs.readFileSync("quiz.json"))

quizJson.quiz.push(quiz())
fs.writeFileSync("quiz.json", JSON.stringify(quiz.json))