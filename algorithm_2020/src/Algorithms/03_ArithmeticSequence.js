//[?] 1부터 20까지의 정수 중 홀수의 합을 구하는 프로그램
// 1, 3, 5, 7, 9...


var sum = 0;
var sequence = "";

for(let i = 1; i <= 20; i++) {
    if(i % 2 == 1){
        sum += i;
        sequence += i + " ";
    }
}

console.log(sequence);

console.log("1부터 20까지의 홀수의 합 : "+ sum);