#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greet } from './cli.js';

const rounds = 3;
let failure = false;

export default function gameLoop(questionFunction, rule) {
  const playerName = greet();
  console.log(rule);
  for (let i = 0; i < rounds; i += 1) {
    const [generatedNumber, rightAnswer] = questionFunction();
    console.log(`Question: ${generatedNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${playerName}!`);
      failure = true;
      break;
    }
    console.log('Correct!');
  }
  if (!failure) {
    console.log(`Congratulations, ${playerName}!`);
  }
}
