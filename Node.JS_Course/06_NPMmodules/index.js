//npm install chalk@4.1.0, validator
const chalk = require('chalk');
const validatorKrlo = require('validator');

console.log(chalk.green('Hello world!'));

const res  = validatorKrlo.isEmail('fefnhenk@a.com');
console.log(res ? chalk.green(res) : chalk.red(res));