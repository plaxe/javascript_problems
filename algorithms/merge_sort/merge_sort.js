var entered_arr_data = [-2, 0, 4000, 12, 220, 25, 2, 1, 1, 67, -562, 716, 5, 76, 62, -44];

var merge = function (arr1, arr2) {

    var res = [];

    var leftPointer  = 0;
    var rightPointer = 0;

    while (leftPointer + rightPointer != arr1.length + arr2.length) {

        if (arr1[leftPointer] < arr2[rightPointer]) { // if right el > left el
            res.push(arr1[leftPointer]);
            leftPointer += 1;
            continue;
        }
        if (arr1[leftPointer] > arr2[rightPointer]) { // if right el < left el
            res.push(arr2[rightPointer]);
            rightPointer += 1;
            continue;
        }
        if (arr1[leftPointer] === arr2[rightPointer]) { // if right el === left el, take where index not finished
            if (leftPointer < arr1.length) {
                res.push(arr1[leftPointer]);
                leftPointer += 1;
            }
            else {
                res.push(arr2[rightPointer]);
                rightPointer += 1;
            }
            continue;
        }

        //if we get here one array fully populated to result, can be replaced to if-else

        if (!arr1[leftPointer]) { //if left array finished adding element from another
            res.push(arr2[rightPointer]);
            rightPointer += 1;
            continue;
        }

        if (!arr2[rightPointer]) { //if right array finished adding element from another
            res.push(arr1[leftPointer]);
            leftPointer += 1;
            continue;
        }
    }

    return res;
}

var merge_sort = function (array) {

    if (array.length <= 1)
        return array;

    var leftArray  = merge_sort(array.slice(0, array.length / 2));
    var rightArray = merge_sort(array.slice(array.length / 2, array.length));

    return merge(leftArray, rightArray);
}

console.log(merge_sort(entered_arr_data));