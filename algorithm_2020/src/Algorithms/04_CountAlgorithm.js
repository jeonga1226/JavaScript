//[?] 1부터 1,000까지의 정수 중 13의 배수의 개수(건수, 횟수)

// 개수 알고리즘 (Count Algorithm) : 주어진 범위에 주어진 조건에 해당하는 자료들의 개수

var count = 0;

for (var i = 1; i <= 1000; i) {
    if(i % 13 == 0){
        count ++;
    }
}

console.log("1 부터 1,000까지의 정수 중 13의 배수의 개수 : " +count);