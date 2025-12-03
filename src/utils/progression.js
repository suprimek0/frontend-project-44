export const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  return progression
}
