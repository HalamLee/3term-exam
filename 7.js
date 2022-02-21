function solution(str) {
  const answer = [];
  const arr = str.split(':');
  answer.push(arr[0] + '시');
  answer.push(arr[1] + '분');
  answer.push(arr[2] + '초');
  console.log(answer);
}

solution('13:05:31');
