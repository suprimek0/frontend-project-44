#!/usr/bin/env node

import { runGame } from '../src/index.js'
import generateQuestion from '../src/games/prime.js'

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

runGame(gameDescription, generateQuestion)
