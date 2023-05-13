#!/usr/bin/env node
import gameLoop from '../src/index.js';
import { getRandomInt } from '../src/cli.js';

const rule = 'Answer "yes" if the number is prime, otherwise answer "no"';

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  if (number <= 3) {
    return true;
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

function generateQuestion() {
  const number = getRandomInt(2, 99);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, rightAnswer];
}

gameLoop(generateQuestion, rule);
