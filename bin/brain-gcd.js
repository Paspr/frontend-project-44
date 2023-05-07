#!/usr/bin/env node
import gameLoop from '../src/index.js';

const rule = 'Find the greatest common divisor of given numbers.';

function calculateGCD(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return calculateGCD(secondNumber, firstNumber % secondNumber);
}

function generateQuestion() {
  const firstNumber = Math.floor(Math.random() * 100 + 1);
  const secondNumber = Math.floor(Math.random() * 100 + 1);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = calculateGCD(firstNumber, secondNumber);
  return [question, String(rightAnswer)];
}

gameLoop(generateQuestion, rule);
