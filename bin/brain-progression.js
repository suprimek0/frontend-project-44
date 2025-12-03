#!/usr/bin/env node

import { runGame } from '../src/index.js'
import generateQuestion from '../src/games/progression.js'

const gameDescription = 'What number is missing in the progression?'

runGame(gameDescription, generateQuestion)
