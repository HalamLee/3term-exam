function solution(str) {
  const arr = str.split(', ');
  let array = arr.map((el) => Number(el));
  console.log(array);
  const sum = array.reduce((pre, cur) => pre + cur);
  console.log(Math.round(sum / 4));
}

solution('50, 100, 50, 75');
