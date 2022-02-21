function solution(str) {
  let answer = '';
  const string = str.split(' ');
  console.log(string);

  for (let i in string) {
    let temp = string[i].substr(0, string[i].length / 2);
    for (let word of temp) {
      if (word === word.toLowerCase()) {
        answer += word.toUpperCase();
      } else {
        answer += word.toLowerCase();
      }
    }
    answer += ' ';
  }

  console.log(answer);
}

solution('hELLOhELLO wORLDwORLD');

// x
