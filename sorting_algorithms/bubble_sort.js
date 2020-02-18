//bubble sort.

var buble_sort = (array) => {

    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {

            if (array[j] > array[j + 1]) {
                let   temp   = array[j];
                array[j]     = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

var unsorted_arr = [14, 12, -25, 1, 2, 1, 7, -3, 7, 44, 55, 0];
buble_sort(unsorted_arr);

console.log(unsorted_arr);