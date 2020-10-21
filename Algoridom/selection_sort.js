const numbers = [43, 54, 3, 67, 8, 45, 4, 90, 23, 12, 55];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i+1 ; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        const temp = array[i];
        array[i] = array[min]
        array[min] = temp;
    }
    return array;
}

const sort = selectionSort(numbers);
console.log(sort)