function findMax(arr) {
    let res = 0;

    for(const item of arr) {
        if(res < item) {
            res = item
        }
    }

    return res
}

let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1]

console.log(findMax(numbers))