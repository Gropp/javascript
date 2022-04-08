function filterIntPos (arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item >= 0;
}

const nums = [-1,-3,-2,5,4,-6,7,-5,-8,0];

console.log(filterIntPos(nums).length);