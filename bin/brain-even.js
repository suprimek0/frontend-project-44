#!/usr/bin/env node

import readlineSync from 'readline-sync'
import { greetUser } from '../src/cli.js'

const isEven = (num) => num % 2 === 0
const playGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) // Случайное число от 0 до 99
    console.log(`Question: ${number}`)

    const answer = readlineSync.question('Your answer: ').trim().toLowerCase()
    const correctAnswer = isEven(number) ? 'yes' : 'no'

    if (answer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

// Основной поток выполнения
const name = greetUser() // Вызывает приветсвие и запрашивает имя (из cli.js)
playGame(name)
