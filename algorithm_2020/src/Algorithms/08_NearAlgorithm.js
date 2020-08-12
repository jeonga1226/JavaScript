// [?] 원본 데이터 중에서 대상 데이터와 가장 가까운 값

// 근사값 알고리즘 (Near Algorithm) : 가까운 값 -> 차잇값의 절대값의 최소값
var min = Number.MAX_SAFE_INTEGER;

var numbers = [10, 20, 30, 27, 17 ];
var target = 25;    // target과 가까운 값
var near = 0;       // 가까운 값

for(let i=0; i<numbers.length; i++){
    var abs = Math.abs(numbers[i] - target); // 차이값의 절대값
    if(abs <  min) {
        min = abs;  //MIN : 최소값 알고리즘
        near = numbers[i];
    }
}

console.log(target + "과 가장 가까운 값 : "+ near + " (차이 : "+ min +")");