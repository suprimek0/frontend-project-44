const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateQuestion = () => {
  const num1 = getRandomInt(1, 25)
  const num2 = getRandomInt(1, 25)
  const operations = ['+', '-', '*']
  const operation = operations[getRandomInt(0, 2)]

  let correctAnswer
  switch (operation) {
    case '+':
      correctAnswer = num1 + num2
      break
    case '-':
      correctAnswer = num1 - num2
      break
    case '*':
      correctAnswer = num1 * num2
      break
  }

  const question = `${num1} ${operation} ${num2}`
  return { question, correctAnswer }
}

export default generateQuestion
