function solution(arr) {
  const answer = [];
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((pre, cur) => pre + cur);
  answer.push(min, max, sum);
  console.log(answer);
}

solution([3]);
