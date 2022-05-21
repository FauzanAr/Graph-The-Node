function modeling(object) {
    const valueKeys = Object.keys(object);
    const values = Object.values(object);
    const res = []

    for(let i = 0; i < values.length; i++) {
        res.push({ date: valueKeys[i], profit: values[i]})
    }

    return res
}

const reports = { 
    '12/25/21': 400000,
    '12/26/21': 200000,
    '12/27/21': 450000,
    '12/28/21': 500000,
    '12/29/21': 420000,
    '12/30/21': 420000,
    '12/31/21': 700000
}

console.log(modeling(reports))