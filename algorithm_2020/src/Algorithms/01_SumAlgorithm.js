//[?] n명의 점수 중에서 80점 이상인 점수의 합계

// 합계 알고리즘(Sum Algorithm) : 주어진 범위에 주언진 조건에 해당하는 자료들의 합계

//[1] Input(입력) 
var scores = [ 100, 75, 50, 37, 90, 95 ]; // n명의 점수
var sum = 0;    // 합계가 담길 그릇
var N = scores.length; //의사코드

//[2] Process(처리) : 합계 알고리즘 영역
for (var i = 0; i < scores.length; i++) {
    if(scores[i] >= 80 ){
        sum += scores[i];
    }
}

//[3] Output(출력)
console.log(N + "명의 점수 중 80점 이상의 총점 : "+ sum);

//[i] 디버거를 사용하여 디버깅하기 : F9 -> F5 -> F11 -> F5
