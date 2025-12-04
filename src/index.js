#!/usr/bin/env node

import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const askQuestion = (question) => {
  rl.question(question, (answer) => {
    return answer.trim()
  })
}

const runGame = (gameDescription, gameLogic) => {
  console.log('Welcome to the Brain Games!')
  rl.question('May I have your name? ', (name) => {
    console.log(`Hello, ${name}!`)
    console.log(gameDescription)

    let correctAnswers = 0
    const rounds = 3

    const playRound = () => {
      const { question, correctAnswer } = gameLogic()
      console.log(`Question: ${question}`)
      rl.question('Your answer: ', (userAnswer) => {
        if (userAnswer === correctAnswer.toString()) {
          console.log('Correct!')
          correctAnswers++
          if (correctAnswers < rounds) {
            playRound()
          }
          else {
            console.log(`Congratulations, ${name}!`)
            rl.close()
          }
        }
        else {
          console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
          console.log(`Let's try again, ${name}!`)
          rl.close()
        }
      })
    }

    playRound()
  })
}

export { runGame, askQuestion }
