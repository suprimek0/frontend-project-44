import { isPrime } from '../utils/prime.js'

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateQuestion = () => {
  const number = getRandomInt(2, 100)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  const question = number.toString()

  return { question, correctAnswer }
}

export default generateQuestion
