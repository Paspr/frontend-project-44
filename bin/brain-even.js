#!/usr/bin/env node
import gameLoop from '../src/index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no"';

function isEven(number) {
  return number % 2 === 0;
}

function generateQuestion() {
  const number = Math.floor(Math.random() * (100 - 0));
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [number, rightAnswer];
}

gameLoop(generateQuestion(), rule);
