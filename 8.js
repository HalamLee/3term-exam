const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\r\n');
if (input[input.length - 1] === '') input.pop();

function solution() {
  const answer = {};
  for (let i = 1; i <= Number(input[0]); i++) {
    let str = input[i].split(' ');
    answer[str[0]] = str[1];
  }
  console.log(answer);
}

solution();
