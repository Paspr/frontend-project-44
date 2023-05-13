#!/usr/bin/env node
import gameLoop from '../src/index.js';
import { getRandomInt } from '../src/cli.js';

const rule = 'What number is missing in the progression?';

function generateProgression() {
  const progressionLength = getRandomInt(5, 10);
  const commonDiffirence = getRandomInt(2, 10);
  const firstNumber = getRandomInt(0, 100);
  const missingNumberIndex = getRandomInt(0, progressionLength - 1);
  const progressionArray = [];
  progressionArray.push(firstNumber);
  for (let i = 1; i < progressionLength; i += 1) {
    progressionArray.push(progressionArray[i - 1] + commonDiffirence);
  }
  const missingNumber = progressionArray[missingNumberIndex];
  progressionArray[missingNumberIndex] = '..';
  return [progressionArray.join(' '), String(missingNumber)];
}

gameLoop(generateProgression, rule);
