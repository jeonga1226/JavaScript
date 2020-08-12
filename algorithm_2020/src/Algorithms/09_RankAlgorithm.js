//[?] 주어진 데이터의 순위를 구하는 로직

//순위 알고리즘 : 점수 데이터에 대한 순위 구하기
var scores = [90, 87, 100, 95, 80]; // 등수 : 3, 4, 1, 2, 5
var rankings = Array(5).fill(1);       //모두 1로 초기화

// RANK : 나와 나머지 데이터 for문 두번 사용
for(let i=0; i<scores.length; i++){
    rankings[i] = 1;
    for(let j=0; j<scores.length; j++){
        if(scores[i] < scores[j]){  //현재(i)와 나머지들(j) 비교
            rankings[i]++;         // 나보다 큰 점수가 나오면 순위 1 증가
        }
    }
}

for(let i=0; i<scores.length; i++){
    console.log(scores[i] + "점은 "+ rankings[i] +"등");
}



