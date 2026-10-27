// DAY 12 실습 02 — 합계 함수 만들기

// 1. 1부터 n까지 더한 값을 돌려주는 함수 — 함수 선언식
function sumTo(max) { // 바뀜: 매개변수 n → max
  let total = 0;
  for (let i = 1; i <= max; i++) { // 바뀜: n → max
    total += i;
  }
  return total;
}

console.log(sumTo(5)); // 바뀜: 인수 10 → 5
console.log(sumTo(100));

// 2. 구구단 한 단을 출력하는 함수 — 함수 표현식, 매개변수 dan
const printDan = function (dan) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`);
  }
};

printDan(9); // 바뀜: 인수 7 → 9

// 3. 점수 목록의 합계 — 화살표 함수 (배열은 DAY 13에서 자세히 봅니다)
const scores = [80, 95, 70, 55];

const sumScores = (list) => {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  return total;
};

const total = sumScores(scores);
console.log(`합계 ${total}점, 평균 ${total / scores.length}점`);

// 4. 조건에 맞는 것만 세기 — 기준 점수 미만은 continue로 건너뜁니다
const countPass = (list, cut) => { // 바뀜: 매개변수 cut 추가
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] < cut) { // 바뀜: 60 → cut
      continue;
    }
    count++;
  }
  return count;
};

console.log(`60점 이상 ${countPass(scores, 60)}명`); // 바뀜: 인수 2개
console.log(`80점 이상 ${countPass(scores, 80)}명`); // 바뀜: 새로 추가
