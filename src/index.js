module.exports = function reverse (n) {
    let nStr = String(Math.abs(n));
    let reversedNum = nStr.split('').reverse().join('');
    return +reversedNum;
}
