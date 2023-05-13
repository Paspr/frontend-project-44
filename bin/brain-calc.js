#!/usr/bin/env node
import gameLoop from '../src/index.js';

const rule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

function calculateAnswer(firstOperand, secondOperand, operationSign) {
  let result = 0;
  switch (operationSign) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    default:
      break;
  }
  return String(result);
}

function generateQuestion() {
  const firstOperand = Math.floor(Math.random() * 100 + 1);
  const secondOperand = Math.floor(Math.random() * 100 + 1);
  const operationSign = operations[Math.floor(Math.random() * operations.length)];
  const question = `${firstOperand} ${operationSign} ${secondOperand}`;
  const rightAnswer = calculateAnswer(firstOperand, secondOperand, operationSign);
  return [question, rightAnswer];
}

gameLoop(generateQuestion, rule);
