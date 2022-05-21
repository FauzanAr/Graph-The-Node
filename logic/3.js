function multiply(object) {
    for (let key in object) {
        if (typeof object[key] == 'number') {
            object[key] *= 2;
        } else {
            object[key] = 0;
        }
    }
    
    return Object.fromEntries(
        Object.entries(object).sort(([,a],[,b]) => a-b)
    );
}

const data = { i: 6, j: null, k: 3, l: 12 };

console.log(multiply(data))