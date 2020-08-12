//[?] 정렬되어 잇는 데이터를 이진 검색을 사용하여 반씩 나눠서 검색

// 검색 알고리즘(Search Algorithm) : 주어진 데이터에서 특정 데이터 찾기

    //[1] Input
    var data = [1, 3, 5, 7, 9];
    var N = data.length;
    var search = 3;
    var flag = false;
    var index = -1;     // 인덱스 변수 : 찾은 위치

    //[2] Process : 이진 검색 (Binary Search) : Full Scan -> Index Scan
    var low = 0;        //낮은 인덱스
    var high = N -1;    //높은 인덱스

    while (low <= high){
        var mid = parseInt((low + high) / 2);
        // console.log("low : "+ low + "         high : "+ high +"             mid : "+ mid);
        if( data[mid] == search){
            flag = true;
            index = mid; 
            break;
        } else if( data[mid] > search){
            high = mid - 1;     // 찾을 데이터가 mid보다 작으면 왼쪽 영역으로 이동 (오름차순 정렬이기 때문)
        } else{
            low = mid + 1;      // 찾을 데이터가 mid보다 크면 오른쪽 영역으로 이동 (오름차순 정렬이기 때문)
        }
    }

    //[3] Output
    if(flag){
        console.log(search+"를 "+ index + "위치에서 찾았습니다.");
    }else{
        console.log("찾지 못했습니다.")
    }