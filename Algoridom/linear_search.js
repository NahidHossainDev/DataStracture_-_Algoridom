const nums = [1, 45, 67, 87, 98, 76, 90, 23, 54]

function findValue(value) {
    for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
        if (element == value) {
        return ("your value is exists"+ ' ' + (i+1) +"th position"  )
        }
    }
    return ("your value doesn't exists here")
}

const a = findValue(98)
const b = findValue(83)
console.log(a)
console.log(b);
