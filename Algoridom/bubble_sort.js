const numbers = [43, 54, 3, 67, 8, 45, 4, 90, 23, 12, 55];

function bubbleShort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j]
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            
        }
    }
    return array
}  

const sorted = bubbleShort(numbers);
console.log(sorted);