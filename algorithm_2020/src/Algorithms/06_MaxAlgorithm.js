

//최댓값 알고리즘 : (주어진 범위 + 주어진 조건)의 자료들의 가장 큰 값
(function(){
    //[0] Initialize
    var max = Number.MIN_SAFE_INTEGER; // 숫자 형식의 데이터 중 가장 작은 값으로 초기화

    //[1] Input
    var number = [-2, -5, 4, -7, -1 ]; // Max : -1
    var N = number.length; //  의사코드

    //[2] Process : Max
    for(let i=0; i < N; i++){
        if(max < number[i]){
            max = number[i];
        }
    }

    //[3] Output 
    console.log("최댓값 : " + max);
})();