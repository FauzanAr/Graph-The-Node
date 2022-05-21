function findEveryColumn(arrLength, totalGroup) {
    const res = []

    for(let i = 0; i < arrLength; i++) {
        res[i % totalGroup] = res[i % totalGroup] ? res[i % totalGroup] + 1 : 1
    }

    return res
}


function grouping(arr, totalGroup) {
    const res = [arr.sort((a, b) => a.firstName.localeCompare(b.firstName))]

    if(arr.length > totalGroup) {
        const counter = findEveryColumn(arr.length, totalGroup);

        for(let i = 0; i < counter.length; i++) {
            res.push(arr.splice(0, counter[i]))
        }

        // pop out the first index, because of empty array
        res.shift()
    }

    return res;
}

const students = [
    { firstName: 'Kai', lastName: 'Lyons' },
    { firstName: 'Belle', lastName: 'Norton' },
    { firstName: 'Finnley', lastName: 'Rennie' },
    { firstName: 'Tatiana', lastName: 'Dickerson' },
    { firstName: 'Peyton', lastName: 'Gardner' },
];

console.log(grouping(students, 3))  