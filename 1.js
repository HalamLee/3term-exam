const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
if (input[input.length - 1] === '') input.pop();

function solution() {
  const inputText = input[0].split(' ');
  const num = Number(inputText[0]);
  let text = inputText[1];
  console.log(text.repeat(num));
}

solution();
