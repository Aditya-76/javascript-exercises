const removeFromArray = function(...args) {
    // let idx = arr.indexOf(val);
    // arr.splice(idx,1);
    // return arr;
    let arr = args[0];
    let values = [];
    for (let i=1;i<args.length;i++)values.push(args[i]);
    let idxs = [];
    for (let i=0;i<values.length;i++) idxs.push(arr.indexOf(values[i]));
    idxs.forEach(idx => {
        if (arr.includes(arr[idx])) arr.splice(idx,1);
    })
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
