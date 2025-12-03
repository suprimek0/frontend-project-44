import { generateProgression } from '../utils/progression.js'

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateQuestion = () => {
  // Параметры прогрессии
  const start = getRandomInt(1, 20)
  const step = getRandomInt(1, 10)
  const length = getRandomInt(5, 10) // от 5 до 10 чисел

  // Генерация прогрессии
  const progression = generateProgression(start, step, length)

  // Выбор случайной позиции дл скрытия
  const hiddenIndex = getRandomInt(0, length - 1)
  const correctAnswer = progression[hiddenIndex]

  // Формирование вопроса: заменяем число на '..'
  const questionParts = progression.map((num, index) =>
    index === hiddenIndex ? '..' : num.toString(),
  )
  const question = questionParts.join(' ')

  return { question, correctAnswer }
}

export default generateQuestion
