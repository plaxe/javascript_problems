var merge = function (arr1, arr2) {

    var result = [];

    var leftIndex  = 0;
    var rightIndex = 0;

    while (leftIndex + rightIndex != arr1.length + arr2.length) {

        if (arr1[leftIndex] < arr2[rightIndex]) { // if right el > left el
            result.push(arr1[leftIndex]);
            leftIndex += 1;
            continue;
        }
        if (arr1[leftIndex] > arr2[rightIndex]) { // if right el < left el
            result.push(arr2[rightIndex]);
            rightIndex += 1;
            continue;
        }
        if (arr1[leftIndex] === arr2[rightIndex]) { // if right el === left el, take where index not finished
            if (leftIndex < arr1.length) {
                result.push(arr1[leftIndex]);
                leftIndex += 1;
            }
            else {
                result.push(arr2[rightIndex]);
                rightIndex += 1;
            }
            continue;
        }

        //if we get here one array fully populated to result, can be replaced to if-else

        if (!arr1[leftIndex]) { //if left array finished adding element from another
            result.push(arr2[rightIndex]);
            rightIndex += 1;
            continue;
        }

        if (!arr2[rightIndex]) { //if right array finished adding element from another
            result.push(arr1[leftIndex]);
            leftIndex += 1;
            continue;
        }
    }

    return result;
}

var merge_sort = function (array) {

    if (array.length <= 1)
        return array;

    var leftArray  = merge_sort(array.slice(0, array.length / 2));
    var rightArray = merge_sort(array.slice(array.length / 2, array.length));

    return merge(leftArray, rightArray);
}