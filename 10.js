function solution(str) {
  const obj = {
    삼성: [],

    애플: [],

    한성: [],

    레노버: [],

    LG: [],

    아수스: [],

    기타: [],
  };

  const arr = str.split(' ');
  for (let i of arr) {
    switch (Math.floor(Number(i) / 1000)) {
      case 1:
        obj['삼성'].push(i);
        break;
      case 2:
        obj['애플'].push(i);
        break;
      case 3:
        obj['한성'].push(i);
        break;
      case 4:
        obj['레노버'].push(i);
        break;
      case 5:
        obj['LG'].push(i);
        break;
      case 6:
        obj['아수스'].push(i);
        break;
      default:
        obj['기타'].push(i);
    }
  }
  console.log(obj);
}

solution('1532 5342 8329 2632 5849 3213 1002');
