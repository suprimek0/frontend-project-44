import { gcd } from '../utils/math.js'

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateQuestion = () => {
  const num1 = getRandomInt(1, 100)
  const num2 = getRandomInt(1, 100)

  const correctAnswer = gcd(num1, num2)
  const question = `${num1} ${num2}`

  return { question, correctAnswer }
}

export default generateQuestion
