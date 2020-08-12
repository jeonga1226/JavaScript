//[?] 무작위 데이터를 순서대로 정렬

// 정렬 알고리즘 (Sort Algorithm) : 가장 [작은/큰] 데이터를 왼쪽으로 순서대로 이동
(function(){
    // [1] input
    var data = [3, 2, 1, 5, 4];     // 1, 2, 3, 4, 5
    var N = data.length;

    // [2] process : Selection Sort(선택 정렬) 알고리즘
    for(let i = 0; i < N-1; i++){   // i = 0 to N-1
        for(let j = i+1; j < N; j++){ // j = i+1 to N
            if(data[i] > data[j]) { // 부등호 방향에 따라 ASC, DESC
                var temp = data[i];
                data[i] = data[j];
                data[j] = temp;        // SWAP
            }
        }
        console.log((i+1) + "회전");
        for(let i=0; i< N; i++){
            console.log(data[i]);
        }
    }

    // [3] output
    for(let i=0; i< N; i++){
        console.log(data[i]);
    }
}) ()