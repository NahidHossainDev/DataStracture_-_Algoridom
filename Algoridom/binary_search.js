const nums = [1, 3, 4, 7, 9, 23, 34, 44, 48, 55, 66, 70, 77, 85, 90]

function binarySearch(target) {
        
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) {
        return console.log("item found in position ", mid + 1);
    }
    if (nums[mid] < target) {
        start = mid + 1;
    }
    if (nums[mid] > target) {
        end = mid - 1;
    }
    }
    return -1
}

console.log(binarySearch(9));
